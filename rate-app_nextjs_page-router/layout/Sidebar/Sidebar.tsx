import { ISidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import cn from 'classnames';

export const Sidebar = ({ className, children, ...props }: ISidebarProps): JSX.Element => {
     return <div
         className = {
            cn(
                styles.sidebar,
                className,
                )
            }
        {...props}
        >
            { children }
            Sidebar!!!!!!!!
        </div>;
    };