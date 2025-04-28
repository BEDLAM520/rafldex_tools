import React from 'react';

interface InputProps {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	className?: string;
	id?: string;
	style?: React.CSSProperties;
}

export const Input: React.FC<InputProps> = ({ value, onChange, placeholder, className, id, style }) => {
	return (
		<input
		id={id}
		style={style}
		type="text"
		value={value}
		onChange={onChange}
		placeholder={placeholder}
		className={`p-2 border border-gray-300 rounded-md ${className}`}
	/>
	);
};
