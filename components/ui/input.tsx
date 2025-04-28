import React from 'react';
import { clsx } from 'clsx';

interface InputProps {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	className?: string;
	id?: string;
	style?: React.CSSProperties;
	'aria-label'?: string;
	type?: string;
}

export const Input: React.FC<InputProps> = ({
	value,
	onChange,
	placeholder,
	className,
	id,
	style,
	'aria-label': ariaLabel,
	type = 'text'
}) => {

	const combinedClassName = clsx(
		'flex h-10 w-full rounded-brand border border-brand-dark/30 bg-transparent px-3 py-2 text-sm',
		'ring-offset-background',
		'file:border-0 file:bg-transparent file:text-sm file:font-medium',
		'placeholder:text-brand-dark/60',
		'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2',
		'disabled:cursor-not-allowed disabled:opacity-50',
		'font-sans',
		className
	);

	return (
		<input
		id={id}
		style={style}
		type={type}
		value={value}
		onChange={onChange}
		placeholder={placeholder}
		aria-label={ariaLabel}
		className={combinedClassName}
		/>
	);
};
