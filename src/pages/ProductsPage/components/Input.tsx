import { useEffect, useRef } from 'react';
import type { SearchInputProps } from '../../../types';

const Input = (
    { value, onChange }: SearchInputProps
) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <input
            ref={inputRef}
            type='text'
            placeholder='Search products...'
            className='search-input'
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
};

export default Input;
