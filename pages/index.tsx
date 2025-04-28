import React, { useState, useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Table } from '@/components/ui/table';
import { DownloadButton } from '@/components/ui/downloadButton';
import { LoadingSpinner } from '@/components/ui/loadingSpinner';

interface ParticipantData {
	userWalletAddress: string;
	ticketsBought: number;
}

interface RawParticipantData {
	userWalletAddress: string;
	ticketsBought: number;
	[key: string]: any;
}

type RafldexApiResponse = RawParticipantData[];

interface ApiErrorResponse {
	error?: string;
	details?: string;
	message?: string;
}

const IndexPage: React.FC = () => {
	const [raffleId, setRaffleId] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);
	const [participants, setParticipants] = useState<ParticipantData[]>([]);
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
			const externalApiUrl = `https://api.rafldex.io/raffle-participants/${trimmedRaffleId}`;
			console.log(`Frontend requesting directly from: ${externalApiUrl}`);

			const response = await fetch(externalApiUrl, {
				method: 'GET',
				headers: {
					'Accept': 'application/json',
				}
			});

			console.log('Frontend received response status:', response.status);

			if (!response.ok) {
				let errorMessage = `Request failed with status ${response.status}`;
				try {
					const errorData: ApiErrorResponse = await response.json();
					errorMessage = errorData?.error || errorData?.message || errorMessage;
					if (errorData?.details) {
						errorMessage += ` (${errorData.details})`;
					}
					console.error("External API Error Response:", errorData);
				} catch (parseError) {
					errorMessage = `${response.status} ${response.statusText || 'Error'}`;
					console.error("Failed to parse error response:", await response.text());
				}

				if (response.status === 404) {
					errorMessage = "Raffle ID/Address not found on Rafldex API.";

					errorMessage = "Rate limit exceeded on Rafldex API. Please wait.";
				}

				throw new Error(errorMessage);
			}

			const result: RafldexApiResponse = await response.json();
			console.log('Frontend parsed JSON result:', result);

			const fetchedParticipants = Array.isArray(result)
			? result.map(item => ({
				userWalletAddress: item.userWalletAddress,
				ticketsBought: item.ticketsBought
			}))
			: [];
			console.log('Frontend processed participants:', fetchedParticipants);

			const validParticipants = fetchedParticipants.filter(
				p => p.userWalletAddress && typeof p.ticketsBought === 'number'
			);

			setParticipants(validParticipants);

			if (validParticipants.length === 0 && Array.isArray(result) && result.length > 0) {
				setError("Fetched data, but could not extract valid participant info (missing userWalletAddress or ticketsBought).");
			} else if (validParticipants.length === 0) {
				setError("No participants found for the provided Raffle ID/Address.");
			}

		} catch (err: unknown) {
			console.error("Failed to fetch participants directly:", err);
			let specificError = "An unknown error occurred while fetching from Rafldex API.";
			if (err instanceof Error) {
				if (err.message.includes('Failed to fetch')) {
					specificError = "Network error: Could not reach Rafldex API. Check connection or CORS policy.";
				} else if (err.message.includes('invalid json')) {
					specificError = "Received invalid JSON response from Rafldex API.";
				}
				else {
					specificError = err.message;
				}
			}
			if (specificError.includes('Network error')) {
				setError("Could not fetch directly from Rafldex API. This might be a CORS issue. The external API might not allow direct browser requests.");
			} else {
				setError(specificError);
			}
			setParticipants([]);
		} finally {
			setLoading(false);
			setCooldown(5);
		}
	}, [raffleId]);

	const downloadFileName = `raffle_${raffleId.substring(0, 8) || 'export'}_participants_tickets`;

	return (
		<div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
		<Card style={{ marginBottom: '20px', padding: '20px' }}>
		<h1>Raffle Participant Snapshot</h1>
		<p style={{ marginBottom: '15px' }}>Enter the Raffle ID/Address below to fetch participants and their ticket counts.</p>

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
			style={{ marginTop: '20px' }}
			fileName={downloadFileName}
			/>
			<DownloadButton
			data={participants}
			format="json"
			style={{ marginTop: '20px', marginLeft: '10px' }}
			fileName={downloadFileName}
			/>
			</>
		)}

		{!loading && !error && participants.length === 0 && !raffleId.trim() && (
			<p style={{ textAlign: 'center', margin: '20px 0' }}>
			Enter a Raffle ID/Address and click "Fetch Participants" to see the results.
			</p>
		)}
		</div>
	);
};

export default IndexPage;
