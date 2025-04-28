import React, { useState, useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Table } from '@/components/ui/table';
import { DownloadButton } from '@/components/ui/downloadButton';
import { LoadingSpinner } from '@/components/ui/loadingSpinner';

interface EntrantData {
	address: string;
}

interface ApiSuccessResponse {
	entrants: string[];
}

interface ApiErrorResponse {
	error: string;
	details?: string;
}

const IndexPage: React.FC = () => {
	const [raffleId, setRaffleId] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);
	const [participants, setParticipants] = useState<EntrantData[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [cooldown, setCooldown] = useState<number>(0);

	const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setRaffleId(e.target.value);
	}, []);

	useEffect(() => {
		let timer: NodeJS.Timeout | undefined;
		if (cooldown > 0) {
			timer = setTimeout(() => setCooldown(prev => Math.max(0, prev - 1)), 1000);
		}
		return () => {
			if (timer) clearTimeout(timer);
		};
	}, [cooldown]);

	const handleFetchClick = useCallback(async () => {
		const trimmedRaffleId = raffleId.trim();

		if (!trimmedRaffleId) {
			setError("Please enter a valid Raffle ID/Address.");
			setParticipants([]);
			return;
		}

		setLoading(true);
		setParticipants([]);
		setError(null);

		try {
			const queryParams = new URLSearchParams({ raffleId: trimmedRaffleId });
			const apiUrl = `/api/fetch_entries?${queryParams.toString()}`;
			console.log(`Fetching from: ${apiUrl}`);

			const response = await fetch(apiUrl);

			if (!response.ok) {
				let errorMessage = `Request failed with status ${response.status}`;
				try {
					const errorData: ApiErrorResponse = await response.json();
					errorMessage = errorData?.error || errorMessage;
					if (errorData?.details) {
						errorMessage += ` (${errorData.details})`;
					}
					console.error("API Error Response:", errorData);
				} catch (parseError) {
					errorMessage = `${response.status} ${response.statusText || 'Error'}`;
				}
				throw new Error(errorMessage);
			}

			const result: ApiSuccessResponse = await response.json();

			const fetchedParticipants = Array.isArray(result.entrants)
			? result.entrants.map(addr => ({ address: addr }))
			: [];

			setParticipants(fetchedParticipants);

			if (fetchedParticipants.length === 0) {
				setError("No participants found for the provided Raffle ID/Address.");
			}

		} catch (err: unknown) {
			console.error("Failed to fetch participants:", err);
			let specificError = "An unknown error occurred.";
			if (err instanceof Error) {
				if (err.message.includes('429') || err.message.toLowerCase().includes('rate limit')) {
					specificError = "Rate limit exceeded. Please wait a few seconds before retrying.";
				} else if (err.message.includes('404') || err.message.toLowerCase().includes('not found')) {
					specificError = "Raffle ID/Address not found.";
				} else {
					specificError = err.message;
				}
			}
			setError(specificError);
			setParticipants([]);
		} finally {
			setLoading(false);
			setCooldown(5);
		}
	}, [raffleId]);

	const isDownloadDisabled = participants.length === 0;
	const downloadFileName = `raffle_${raffleId.substring(0, 8) || 'export'}_participants`;

	return (
		<div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
		<Card style={{ marginBottom: '20px', padding: '20px' }}>
		<h1>Raffle Participant Snapshot</h1>
		<p style={{ marginBottom: '15px' }}>Enter the Raffle ID/Address below to fetch participants.</p>

		<div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', gap: '10px' }}>
		<label htmlFor="raffleIdInput" className="sr-only">
		Raffle ID/Address:
		</label>
		<Input
		id="raffleIdInput"
		value={raffleId}
		onChange={handleInputChange}
		placeholder="Enter Raffle ID/Address..."
		className="flex-grow"
		aria-label="Raffle ID or Address"
		/>
		</div>

		<Button
		onClick={handleFetchClick}
		disabled={loading || cooldown > 0 || !raffleId.trim()}
		style={{ marginTop: '10px' }}
		aria-live="polite"
		>
		{loading ? (
			<LoadingSpinner />
		) : cooldown > 0 ? (
			`Wait ${cooldown}s`
		) : (
			'Fetch Participants'
		)}
		</Button>
		</Card>

		{loading && (
			<div style={{ textAlign: 'center', margin: '20px 0' }}>
			<LoadingSpinner />
			<p>Fetching participants...</p>
			</div>
		)}

		{error && !loading && (
			<p style={{ color: 'red', textAlign: 'center', margin: '20px 0', fontWeight: 'bold' }}>
			Error: {error}
			</p>
		)}

		{!loading && !error && participants.length > 0 && (
			<>
			<h2 style={{ marginTop: '20px', marginBottom: '10px' }}>Participants ({participants.length})</h2>
			<Table data={participants} className="mb-4" />
			<DownloadButton
			data={participants}
			format="json"
			style={{ marginTop: '20px', marginLeft: '10px' }}
			fileName={downloadFileName}
			/>
			</>
		)}

		{!loading && !error && participants.length === 0 && !raffleId && (
			<p style={{ textAlign: 'center', margin: '20px 0' }}>
			Enter a Raffle ID/Address and click "Fetch Participants" to see the results.
			</p>
		)}

		{!loading && !error && participants.length === 0 && raffleId && (
			<p style={{ textAlign: 'center', margin: '20px 0' }}>
			No participants found for the specified Raffle ID/Address.
			</p>
		)}
		</div>
	);
};

export default IndexPage;
