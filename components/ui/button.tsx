import React from 'react';
import { clsx } from 'clsx';

type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

interface ButtonProps {
	children?: React.ReactNode;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
	className?: string;
	disabled?: boolean;
	type?: 'button' | 'submit' | 'reset';
	variant?: ButtonVariant;
	size?: ButtonSize;
	'aria-label'?: string;
	style?: React.CSSProperties;
}

const buttonVariants = {
	variant: {
		default: 'bg-brand-green text-brand-dark hover:bg-brand-green/90 dark:bg-brand-green dark:text-brand-dark dark:hover:bg-brand-green/90',
		destructive: 'bg-red-500 text-white hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-800',
		outline: 'border border-brand-dark bg-transparent text-brand-dark hover:bg-brand-green hover:text-brand-dark dark:border-brand-light-gray dark:text-brand-light-gray dark:hover:bg-brand-green dark:hover:text-brand-dark dark:hover:border-brand-green',
		secondary: 'bg-brand-light-gray text-brand-dark hover:bg-brand-light-gray/80 dark:bg-brand-dark/40 dark:text-brand-light-gray dark:hover:bg-brand-dark/60',
		ghost: 'hover:bg-brand-green/10 hover:text-brand-green dark:hover:bg-brand-green/20 dark:hover:text-brand-green',
		link: 'text-brand-green underline-offset-4 hover:underline',
	},
	size: {
		default: 'h-10 px-4 py-2',
		sm: 'h-9 rounded-brand px-3',
		lg: 'h-11 rounded-brand px-8',
		icon: 'h-10 w-10',
	},
};

export const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	className,
	disabled,
	type = 'button',
	variant = 'default',
	size = 'default',
	'aria-label': ariaLabel,
	style
}) => {

	const combinedClassName = clsx(
		'inline-flex items-center justify-center whitespace-nowrap rounded-brand text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-sans',
		buttonVariants.variant[variant],
		buttonVariants.size[size],
		className
	);

	return (
		<button
		type={type}
		onClick={onClick}
		disabled={disabled}
		aria-label={ariaLabel}
		style={style}
		className={combinedClassName}
		>
		{children}
		</button>
	);
};
