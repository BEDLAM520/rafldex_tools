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

const IndexPage: React.FC = () => {
	const [entrantAddresses, setEntrantAddresses] = useState<string[]>(['']);
	const [loading, setLoading] = useState<boolean>(false);
	const [entrants, setEntrants] = useState<EntrantData[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [cooldown, setCooldown] = useState<number>(0);

	const handleInputChange = useCallback((index: number, value: string) => {
		setEntrantAddresses(prev => {
			const updated = [...prev];
			updated[index] = value;
			return updated;
		});
	}, []);

	const addAddressInput = useCallback(() => {
		setEntrantAddresses(prev => [...prev, '']);
	}, []);

	const removeAddressInput = useCallback((index: number) => {
		if (entrantAddresses.length <= 1) return;
		setEntrantAddresses(prev => prev.filter((_, i) => i !== index));
	}, [entrantAddresses.length]);

	useEffect(() => {
		let timer: NodeJS.Timeout;
		if (cooldown > 0) {
			timer = setTimeout(() => setCooldown(prev => prev - 1), 1000);
		}
		return () => clearTimeout(timer);
	}, [cooldown]);

	const handleFetchClick = useCallback(async () => {
		const validAddresses = entrantAddresses
			.map(addr => addr.trim())
			.filter(addr => addr !== '');

		if (validAddresses.length === 0) {
			setError("Please enter at least one valid Entrants Address.");
			setEntrants([]);
			return;
		}

		setLoading(true);
		setEntrants([]);
		setError(null);

		try {
			const queryParams = new URLSearchParams({
				entrants: validAddresses.join(','),
			});

			const response = await fetch(`/api/fetch_entries?${queryParams.toString()}`);

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData?.error || `Request failed with status ${response.status}`);
			}

			const result: { entrants: string[] } = await response.json();
			const formattedEntrants = result.entrants.map(addr => ({ address: addr }));
			setEntrants(formattedEntrants);

			if (formattedEntrants.length === 0) {
				setError("No interacting addresses found for the provided Entrants Address(es).");
			}
		} catch (err) {
			console.error("Failed to fetch entrants:", err);
			if (err instanceof Error && err.message.includes('429')) {
				setError("Rate limit exceeded. Please wait a few seconds before retrying.");
			} else {
				setError(err instanceof Error ? err.message : "An unknown error occurred.");
			}
			setEntrants([]);
		} finally {
			setLoading(false);
			setCooldown(5); // 5-second cooldown after button press
		}
	}, [entrantAddresses]);

	return (
		<div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
			<Card style={{ marginBottom: '20px', padding: '20px' }}>
				<h1>Solana Raffle Entrant Snapshot</h1>
				<p style={{ marginBottom: '15px' }}>Enter one or more Entrants Addresses below.</p>

				{entrantAddresses.map((address, index) => (
					<div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', gap: '10px' }}>
						<label htmlFor={`entrantAddress-${index}`} className="sr-only">
							Entrants Address {index + 1}:
						</label>
						<Input
							id={`entrantAddress-${index}`}
							value={address}
							onChange={(e) => handleInputChange(index, e.target.value)}
							placeholder="Enter Entrants Address..."
							className="flex-grow"
						/>
						{index === entrantAddresses.length - 1 && (
							<Button onClick={addAddressInput} variant="outline" size="icon" aria-label="Add address field">
								+
							</Button>
						)}
						{entrantAddresses.length > 1 && (
							<Button onClick={() => removeAddressInput(index)} variant="destructive" size="icon" aria-label={`Remove address field ${index + 1}`}>
								-
							</Button>
						)}
					</div>
				))}

				<Button
					onClick={handleFetchClick}
					disabled={loading || cooldown > 0}
					style={{ marginTop: '10px' }}
				>
					{loading ? <LoadingSpinner /> : cooldown > 0 ? `Wait ${cooldown}s` : 'Fetch Entrants'}
				</Button>
			</Card>

			{loading && (
				<div style={{ textAlign: 'center', margin: '20px 0' }}>
					<LoadingSpinner />
				</div>
			)}

			{error && <p style={{ color: 'red', textAlign: 'center', margin: '20px 0' }}>Error: {error}</p>}

			{!loading && !error && entrants.length > 0 && (
				<>
					<Table data={entrants} className="mb-4" />
					<DownloadButton
						data={entrants}
						style={{ marginTop: '20px' }}
						fileName={`entrants_snapshot_${entrantAddresses[0] || 'export'}`}
					/>
				</>
			)}

			{!loading && !error && entrants.length === 0 && (
				<p style={{ textAlign: 'center', margin: '20px 0' }}>
					No entrants to display. Enter address(es) and click "Fetch Entrants".
				</p>
			)}
		</div>
	);
};

export default IndexPage;
