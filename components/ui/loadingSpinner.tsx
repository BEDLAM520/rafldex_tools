import React from 'react';
import { clsx } from 'clsx';

type SpinnerSize = 'sm' | 'md' | 'lg';

interface LoadingSpinnerProps {
	size?: SpinnerSize;
	className?: string;
}

const sizeClasses: Record<SpinnerSize, string> = {
	sm: 'w-6 h-6 border-2 border-brand-green/30 border-t-transparent',
	md: 'w-10 h-10 border-4 border-brand-green/30 border-t-transparent',
	lg: 'w-16 h-16 border-4 border-brand-green/30 border-t-transparent',
};

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'lg', className }) => {
	const combinedClassName = clsx(
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
