import React from 'react';
import { clsx } from 'clsx';

interface CardProps {
	children?: React.ReactNode;
	className?: string;
	title?: React.ReactNode;
	style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({ children, className, title, style }) => {
	const combinedClassName = clsx(
		'bg-font-light',
		'border',
		'border-brand-blue/50',
		'rounded-brand',
		'shadow-lg',
		'p-3',
		'font-sans',
	);

	return (
		<div style={style} className={combinedClassName}>
		{title && (
			<h3 className="text-lg font-semibold text-brand-blue">{title}</h3>
		)}
		{children}
		</div>
	);
};
