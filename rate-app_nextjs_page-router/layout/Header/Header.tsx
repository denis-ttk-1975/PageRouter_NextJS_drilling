import { IHeaderProps } from './Header.props';
import styles from './Header.module.css';
import cn from 'classnames';

export const Header = ({ className, children, ...props }: IHeaderProps): JSX.Element => {
     return <div
         className = {
            cn(
                styles.header,
                className,
                )
            }
        {...props}
        >
            Header!!!!!!
            { children }
        </div>;
    };