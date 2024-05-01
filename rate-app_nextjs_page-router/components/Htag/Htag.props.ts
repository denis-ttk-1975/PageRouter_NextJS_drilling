import { ReactNode } from 'react';

export interface IHtagProps {
    tag: 'h1' | 'h2'| 'header_title',
    children: ReactNode,
}