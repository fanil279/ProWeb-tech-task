import type { ButtonHTMLAttributes } from 'react';

export type ButtonVariant =
    | 'success'
    | 'danger';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonVariant;
};
