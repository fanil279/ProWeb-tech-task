import { type FC } from 'react';
import type { ButtonVariant, ButtonProps } from '../types';

const VARIANTS: Record<ButtonVariant, string> = {
    success: 'btn success',
    danger: 'btn danger',
};

const Button: FC<ButtonProps> = (
    { children, variant, className = '', ...props }
) => {
    return (
        <button
            className={`${VARIANTS[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
