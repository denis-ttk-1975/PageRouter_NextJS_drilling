import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface IParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    typography?: 'small' | 'medium' | 'large',
}