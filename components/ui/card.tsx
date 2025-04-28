import React from 'react';

interface CardProps {
	children?: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({ children, className, style }) => {
	return (
		<div style={style} className={`p-4 border rounded-lg shadow-lg ${className}`}>
		{children}
		</div>
	);
};
