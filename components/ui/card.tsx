import React from 'react';
import { clsx } from 'clsx';

interface CardProps {
	children?: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({ children, className, style }) => {
	const combinedClassName = clsx(
		'bg-font-dark',
		'border',
		'border-brand-blue/30',
		'rounded-brand',
		'shadow-md',
		'p-4',
		'font-sans',
		className
	);

	return (
		<div style={style} className={combinedClassName}>
		{children}
		</div>
	);
};
