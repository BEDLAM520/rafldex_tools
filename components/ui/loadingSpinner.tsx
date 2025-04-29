import React from 'react';
import { clsx } from 'clsx';

type SpinnerSize = 'sm' | 'md' | 'lg';

interface LoadingSpinnerProps {
	size?: SpinnerSize;
	className?: string;
}

const sizeClasses: Record<SpinnerSize, string> = {
	sm: 'w-6 h-6 border-2 border-t-2',
	md: 'w-10 h-10 border-4 border-t-4',
	lg: 'w-16 h-16 border-4 border-t-4',
};

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'lg', className }) => {
	const combinedClassName = clsx(
		'border-brand-green',
		'border-t-transparent',
		'rounded-full',
		'animate-spin',
		sizeClasses[size],
		className
	);

	return (
		<div
		className={combinedClassName}
		role="status"
		aria-label="Loading"
		>
		<span className="sr-only">Loading...</span>
		</div>
	);
};
