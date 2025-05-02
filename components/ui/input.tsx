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
		'flex h-10 w-full rounded-brand border bg-transparent px-2 py-3 text-sm',
		'ring-offset-background-dark',
		'file:border-0 file:bg-transparent file:text-sm file:font-medium',
		'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2',
		'disabled:cursor-not-allowed disabled:opacity-50',
		'font-sans',
		'border-brand-green/50',
		'text-brand-green',
		'placeholder:text-color-passive',

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
