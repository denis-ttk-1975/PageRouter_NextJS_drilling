import { IFooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';

export const Footer = ({ className, children, ...props }: IFooterProps): JSX.Element => {
     return <div
         className = {
            cn(
                styles.footer,
                className,
                )
            }
        {...props}
        >
            Footer!!!!!!!!!!!!!
            { children }
        </div>;
    };