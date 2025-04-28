import React from 'react';

interface EntrantData {
	address: string;
}

interface TableProps {
	data: EntrantData[];
	className?: string;
}

export const Table: React.FC<TableProps> = ({ data, className }) => {
	if (!Array.isArray(data) || data.length === 0) {
		return <p>No entrant data available.</p>;
	}

	const header = "Entrant Address";

	return (
	<table className={`min-w-full border-collapse table-auto ${className}`}>
		<thead>
		<tr>
			<th className="px-4 py-2 border-b text-left font-semibold">
			{header}
			</th>
		</tr>
		</thead>
		<tbody>
			{data.map((row, rowIndex) => (
				<tr key={rowIndex} className="hover:bg-gray-50">
					<td className="px-4 py-2 border-b font-mono text-sm"> {/* Added font-mono for addresses */}
				{row.address} {/* Access the address property */}
					</td>
				</tr>
			))}
		</tbody>
	</table>
	);
};
