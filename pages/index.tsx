import React, { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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

interface RaffleResults {
	[raffleId: string]: ParticipantData[];
}

const IndexPage: React.FC = () => {
	const [raffleIds, setRaffleIds] = useState<string[]>(['']);
	const [results, setResults] = useState<RaffleResults>({});
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [showTickets, setShowTickets] = useState<boolean>(false);
	const [currentPage, setCurrentPage] = useState<number>(0);
	const [cooldown, setCooldown] = useState<number>(0);

	const handleInputChange = (index: number, value: string) => {
		const newRaffleIds = [...raffleIds];
		newRaffleIds[index] = value;
		setRaffleIds(newRaffleIds);
	};

	const addInput = () => {
		setRaffleIds([...raffleIds, '']);
	};

	const removeInput = (index: number) => {
		if (raffleIds.length > 1) {
			const removedId = raffleIds[index];
			const newRaffleIds = raffleIds.filter((_, i) => i !== index);
			setRaffleIds(newRaffleIds);

			const updatedResults = { ...results };
			if (removedId && updatedResults[removedId]) {
				delete updatedResults[removedId];
				setResults(updatedResults);
			}

			const validIdsAfterRemove = newRaffleIds.filter(id => id.trim() !== '');
			const newTotalPages = Object.keys(updatedResults).filter(id => validIdsAfterRemove.includes(id)).length;

			if (currentPage >= newTotalPages) {
				setCurrentPage(Math.max(0, newTotalPages - 1));
			}
		}
	};

	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setShowTickets(e.target.checked);
	};

	useEffect(() => {
		let timer: NodeJS.Timeout | undefined;
		if (cooldown > 0) {
			timer = setTimeout(() => setCooldown(prev => Math.max(0, prev - 1)), 1000);
		}
		return () => {
			if (timer) clearTimeout(timer);
		};
	}, [cooldown]);

	const handleFetchData = useCallback(async () => {
		const validRaffleIds = raffleIds.filter(id => id.trim() !== '');
		if (validRaffleIds.length === 0) {
			setError("Please enter at least one Raffle ID/Address.");
			setResults({});
			return;
		}

		setIsLoading(true);
		setError(null);
		setResults({});
		setCurrentPage(0);

		const newResults: RaffleResults = {};
		let fetchError: string | null = null;
		let rateLimited = false;

		for (const id of validRaffleIds) {
			try {
				const externalApiUrl = `https://api.rafldex.io/raffle-participants/${id}`;
				const response = await fetch(externalApiUrl, {
					method: 'GET',
					headers: { 'Accept': 'application/json' }
				});

				if (!response.ok) {
					let errorMessage = `Failed for Raffle ${id}: Status ${response.status}`;
					try {
						const errorData: ApiErrorResponse = await response.json();
						errorMessage = errorData?.error || errorData?.message || errorMessage;
						if (errorData?.details) errorMessage += ` (${errorData.details})`;
					} catch (parseError) {
						errorMessage = `Failed for Raffle ${id}: ${response.status} ${response.statusText || 'Error'}`;
					}

					if (response.status === 404) {
						errorMessage = `Raffle ID ${id} not found.`;
					} else if (response.status === 429) {
						errorMessage = `Rate limit hit while fetching ID ${id}. Try again later.`;
						rateLimited = true;
					}
					if (!fetchError) fetchError = errorMessage;
					newResults[id] = [];
					if (rateLimited) break;
					continue;
				}

				const result: RafldexApiResponse = await response.json();
				const fetchedParticipants = Array.isArray(result)
				? result.map(item => ({
					userWalletAddress: item.userWalletAddress,
					ticketsBought: item.ticketsBought
				}))
				: [];

				const validParticipants = fetchedParticipants.filter(
					p => p.userWalletAddress && typeof p.ticketsBought === 'number'
				);

				newResults[id] = validParticipants;

				if (validParticipants.length === 0 && Array.isArray(result) && result.length > 0) {
					console.warn(`Fetched data for ${id}, but could not extract valid participant info.`);
				} else if (validParticipants.length === 0) {
					console.warn(`No participants found for Raffle ID ${id}.`);
				}

			} catch (err: unknown) {
				console.error(`Failed to fetch participants for ID ${id}:`, err);
				let specificError = `An unknown error occurred for ID ${id}.`;
				if (err instanceof Error) {
					if (err.message.includes('Failed to fetch')) {
						specificError = `Network error for ID ${id}. Check connection or CORS.`;
					} else if (err.message.includes('invalid json')) {
						specificError = `Invalid JSON response for ID ${id}.`;
					} else {
						specificError = err.message;
					}
				}
				if (!fetchError) fetchError = specificError;
				newResults[id] = [];
				if (specificError.includes('Network error')) {
				}
			}
		}

		setResults(newResults);
		setError(fetchError);
		setIsLoading(false);
		setCooldown(5);

	}, [raffleIds]);

	const handleNextPage = () => {
		const validResultIds = Object.keys(results).filter(id => results[id]?.length > 0);
		if (currentPage < validResultIds.length - 1) {
			setCurrentPage(currentPage + 1);
		}
	};

	const handlePrevPage = () => {
		if (currentPage > 0) {
			setCurrentPage(currentPage - 1);
		}
	};

	const handleGoToPage = (pageIndex: number) => {
		const validResultIds = Object.keys(results).filter(id => results[id]?.length > 0);
		if (pageIndex >= 0 && pageIndex < validResultIds.length) {
			setCurrentPage(pageIndex);
		}
	};

	const validResultIds = Object.keys(results).filter(id => raffleIds.includes(id) && results[id]);
	const displayableResultIds = validResultIds.filter(id => results[id].length > 0);
	const currentDisplayId = displayableResultIds[currentPage];
	const currentData = results[currentDisplayId] || [];
	const totalPages = displayableResultIds.length;

	const downloadFileNameBase = currentDisplayId ? `raffle_${currentDisplayId.substring(0, 8)}` : 'participants';
	const downloadFileName = `${downloadFileNameBase}_${showTickets ? 'tickets' : 'wallets'}`;

	const aggregatedDataMap = new Map<string, number>();

	displayableResultIds.forEach(id => {
		const raffleData = results[id] || [];
		raffleData.forEach(participant => {
			const currentTickets = aggregatedDataMap.get(participant.userWalletAddress) || 0;
			aggregatedDataMap.set(participant.userWalletAddress, currentTickets + participant.ticketsBought);
		});
	});

	const allData: ParticipantData[] = Array.from(aggregatedDataMap.entries()).map(
		([userWalletAddress, ticketsBought]) => ({
			userWalletAddress,
			ticketsBought,
		})
	);
	const allDownloadFileName = `all_raffles_${showTickets ? 'tickets' : 'wallets'}`;

	return (
		<div className="container mx-auto font-sans min-h-screen flex flex-col items-center">

		<div className="mb-6 w-full">
		<Image
		src="/images/rafldex-square-logo.svg"
		alt="Official Rafldex Logo"
		width={200}
		height={50}
		className="mx-auto mb-2 block w-1/4"
		priority
		/>
		</div>

		<div className="text-center mb-4">
		<span className="text-color-active text-6xl font-bold">Tools</span>
		</div>

		<div className="text-center mb-4">
		<span className="text-brand-blue/80 text-1xl font-bold">*UNOFFICIAL*</span>
		</div>

		<Card className="bg-font-dark w-full max-w-2xl mb-4 p-6 mx-auto">
		<h1 className="text-center text-3xl font-bold mb-4 text-color-active">Rafldex Participants Snapshot</h1>
		<p className="mb-4 text-center text-brand-blue/80">Enter Raffle ID(s)/Address(es) below.</p>

		<div className="flex flex-col items-center space-y-3 mb-4">
		{raffleIds.map((id, index) => (
			<div key={index} className="flex w-full items-center space-x-2">
			<Input
			className="flex-grow"
			value={id}
			onChange={(e) => handleInputChange(index, e.target.value)}
			placeholder={`Enter Raffle ID/Address ${index + 1}`}
			aria-label={`Raffle ID or Address ${index + 1}`}
			/>
			{index === raffleIds.length - 1 ? (
				<Button onClick={addInput} variant="secondary" size="icon" aria-label="Add Raffle ID Input">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
				</svg>
				</Button>
			) : (
				<Button onClick={() => removeInput(index)} variant="destructive" size="icon" aria-label="Remove Raffle ID Input">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
				</svg>
				</Button>
			)}
			</div>
		))}
		</div>
		</Card>

		<div className="mt-6 mb-4">
		<Button
		onClick={handleFetchData}
		disabled={isLoading || cooldown > 0 || raffleIds.every(id => id.trim() === '')}
		aria-live="polite"
		>
		{isLoading ? (
			<LoadingSpinner size="sm" className="mr-2" />
		) : cooldown > 0 ? (
			`Wait ${cooldown}s`
		) : (
			'Fetch Data'
		)}
		</Button>
		</div>

		<div className="flex items-center space-x-2 mb-4">
		<input
		type="checkbox"
		id="includeTickets"
		checked={showTickets}
		onChange={handleCheckboxChange}
		className="h-4 w-4 rounded border-brand-blue/30 text-color-active focus:ring-brand-green"
		/>
		<label htmlFor="includeTickets" className="text-sm text-brand-blue/80">
		Include Ticket Count in Table & Download
		</label>
		</div>

		<div className="w-full max-w-4xl">
		{isLoading && (
			<div className="flex justify-center items-center flex-col mt-8">
			<LoadingSpinner size="lg" />
			<p className="mt-2 text-color-active">Fetching data...</p>
			</div>
		)}

		{error && !isLoading && (
			<p className="text-red-500 text-center my-8 font-bold">
			Error: {error}
			</p>
		)}

		{!isLoading && !error && totalPages === 0 && raffleIds.some(id => id.trim() !== '') && Object.keys(results).length > 0 && (
			<p className="text-center text-red-500 mt-8">No participants found for the provided Raffle ID(s), or the fetch failed.</p>
		)}

		{!isLoading && currentDisplayId && currentData.length > 0 && (
			<Card className="bg-font-dark mt-6">
			<h2 className="text-lg font-semibold mb-3 text-center text-brand-blue/80">
			Results for: <span className="font-mono text-sm">{currentDisplayId}</span> ({currentData.length} participants)
			</h2>
			<Table data={currentData} showTickets={showTickets} />
			<div className="flex gap-4 justify-center mt-4">
			<DownloadButton
			data={currentData}
			fileName={downloadFileName}
			showTickets={showTickets}
			format="csv"
			variant="default"
			/>
			<DownloadButton
			data={currentData}
			fileName={downloadFileName}
			showTickets={showTickets}
			format="json"
			variant="defaultAlt"
			/>
			</div>
			</Card>
		)}

		{!isLoading && totalPages > 1 && (
			<div className="flex justify-center items-center space-x-2 mt-6">
			<Button onClick={handlePrevPage} disabled={currentPage === 0} variant="outline" size="sm">
			PREV
			</Button>
			<div className="flex items-center space-x-1 overflow-x-auto py-1">
			{displayableResultIds.map((_, index) => (
				<Button
				key={index}
				onClick={() => handleGoToPage(index)}
				variant={currentPage === index ? 'default' : 'outline'}
				size="sm"
				className="px-3 py-1 h-auto min-w-[32px] flex-shrink-0"
				>
				{index + 1}
				</Button>
			))}
			</div>
			<Button onClick={handleNextPage} disabled={currentPage === totalPages - 1} variant="outline" size="sm">
			NEXT
			</Button>
			</div>
		)}

		{!isLoading && totalPages > 1 && (
			<div className="flex gap-4 justify-center mt-4 pt-4 border-t border-brand-blue/20">
			<DownloadButton
			data={allData}
			fileName={allDownloadFileName}
			showTickets={showTickets}
			format="csv"
			variant="default"
			disabled={allData.length === 0}
			>
			Download ALL CSV
			</DownloadButton>
			<DownloadButton
			data={allData}
			fileName={allDownloadFileName}
			showTickets={showTickets}
			format="json"
			variant="defaultAlt"
			disabled={allData.length === 0}
			>
			Download ALL JSON
			</DownloadButton>
			</div>
		)}

		{!isLoading && !error && Object.keys(results).length === 0 && raffleIds.every(id => id.trim() === '') && (
			<p className="text-center my-4 text-color-active/50">
			Enter Raffle ID(s)/Address(es) and click "Fetch Data" to see results.
			</p>
		)}
		</div>

		<div className="mt-4 w-full border-t border-brand-blue/20 pt-2 text-center space-y-2">
		<div className="text-sm text-brand-white/70">
		2025 © Unofficial Rafldex Tools
		</div>
		<div className="flex justify-center items-center my-1">
			<Link href="/buyMeACoffee" className="flex items-center space-x-1.5 text-brand-white/80 hover:text-brand-white hover:underline text-sm">
				<Image
					src="/images/coffee.png"
					alt="Coffee Cup"
					width={16}
					height={16}
				/>
				<span>Buy Me A Coffee!</span>
			</Link>
		</div>
		<div className="text-sm space-x-4">
		<Link href="/terms" className="text-brand-white/80 hover:text-brand-white hover:underline">
		Terms & Conditions
		</Link>
		<span className="text-brand-white/50"> | </span>
		<Link href="/privacy" className="text-brand-white/80 hover:text-brand-white hover:underline">
		Privacy Policy
		</Link>
		</div>
		</div>
		</div>
	);
};

export default IndexPage;