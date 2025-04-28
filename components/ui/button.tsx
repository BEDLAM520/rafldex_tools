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
		default: 'bg-blue-500 text-white hover:bg-blue-600',
		destructive: 'bg-red-500 text-destructive-foreground hover:bg-red-600',
		outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
		secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
		ghost: 'hover:bg-accent hover:text-accent-foreground',
		link: 'text-primary underline-offset-4 hover:underline',
	},
	size: {
		default: 'h-10 px-4 py-2',
		sm: 'h-9 rounded-md px-3',
		lg: 'h-11 rounded-md px-8',
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
		'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
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
