import React from 'react';
import { clsx } from 'clsx';

interface ParticipantData {
	userWalletAddress: string;
	ticketsBought: number;
}

interface TableProps {
	data: ParticipantData[];
	className?: string;
	showTickets?: boolean;
}

export const Table: React.FC<TableProps> = ({ data, className, showTickets = false }) => {
	if (!Array.isArray(data) || data.length === 0) {
		return <p className="text-center text-brand-dark/80 dark:text-brand-light-gray/80">No participant data available.</p>;
	}

	const headers = ["Wallet Address"];
	if (showTickets) {
		headers.push("Tickets Bought");
	}

	const wrapperClassName = clsx(
		'max-h-96',
		'overflow-y-auto',
		'border',
		'rounded-brand',
		'border-brand-dark/10',
		'dark:border-brand-light-gray/20',
		className
	);

	return (
		<div className={wrapperClassName}>
			<table className="min-w-full border-collapse table-auto">
				<thead>
					<tr>
						{headers.map((header, index) => (
							<th key={index} className="px-4 py-2 border-b border-brand-dark/10 dark:border-brand-light-gray/20 text-left font-semibold sticky top-0 bg-brand-white dark:bg-brand-dark dark:text-brand-light-gray z-10">
								{header}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((row, rowIndex) => (
						<tr key={rowIndex} className="hover:bg-gray-100 dark:hover:bg-brand-dark/60">
							<td className="px-4 py-2 border-b border-brand-dark/10 dark:border-brand-light-gray/20 font-mono text-sm text-brand-dark dark:text-brand-light-gray">
								{row.userWalletAddress}
							</td>
							{showTickets && (
								<td className="px-4 py-2 border-b border-brand-dark/10 dark:border-brand-light-gray/20 text-sm text-right text-brand-dark dark:text-brand-light-gray">
									{row.ticketsBought}
								</td>
							)}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
