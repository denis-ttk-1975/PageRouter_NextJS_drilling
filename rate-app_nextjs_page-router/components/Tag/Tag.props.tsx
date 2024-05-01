import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface ITagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: 'small' | 'medium',
    color?: 'ghost' | 'red' | 'green' | 'grey' | 'primary',
    href?: string,
}