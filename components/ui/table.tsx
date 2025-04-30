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
		return <p className="text-center text-red-500">No participant data available.</p>;
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
		'border-brand-blue/30',
		className
	);

	return (
		<div className={wrapperClassName}>
		<table className="min-w-full border-collapse table-auto bg-font-dark">
		<thead>
		<tr>
		{headers.map((header, index) => (
			<th key={index} className="px-4 py-2 border-b border-brand-blue/30 text-left font-semibold sticky top-0 bg-transparent text-brand-blue/80 z-10">
			{header}
			</th>
		))}
		</tr>
		</thead>
		<tbody>
		{data.map((row, rowIndex) => (
			<tr key={rowIndex} className="hover:bg-font-light/60">
			<td className="px-4 py-2 border-b border-brand-blue/30 font-mono text-sm text-left text-color-active">
			{row.userWalletAddress}
			</td>
			{showTickets && (
				<td className="px-4 py-2 border-b border-brand-blue/30 text-sm text-right text-color-active">
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
