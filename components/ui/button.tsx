import React from 'react';
import { clsx } from 'clsx';

export type ButtonVariant = 'default' | 'defaultAlt' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
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
	title?: React.ReactNode;
}

const buttonVariants = {
	variant: {
		default: 'border border-brand-green/50 bg-brand-green text-brand-dark hover:bg-brand-green/90',
		defaultAlt: 'border border-brand-blue/50 bg-brand-blue text-brand-white hover:bg-brand-blue/90',
		destructive: 'border border-red-200 bg-red-500 text-brand-dark hover:bg-red-600',
		outline: 'border border-brand-green bg-transparent text-color-active hover:bg-brand-green hover:text-brand-dark',
		secondary: 'border border-brand-green/20 bg-brand-green/50 text-brand-dark hover:bg-brand-green/80',
		ghost: 'border border-brand-blue/10 hover:bg-brand-green/10 hover:text-brand-dark',
		link: 'text-color-active/80 underline-offset-4 hover:text-color-active hover:underline',
	},
	size: {
		default: 'h-10 rounded-brand px-3 py-4',
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
		'flex position-relative items-center justify-between whitespace-nowrap rounded-brand text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-sans',
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
