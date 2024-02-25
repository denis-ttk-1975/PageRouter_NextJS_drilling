import { IButtonProps } from './Button.props';
import styles from './Button.module.css';
import ChevronIcon from './chevron.svg';
import cn from 'classnames';
export const Button = ({ appearance, arrow = 'none', children, className, ...props }: IButtonProps): JSX.Element => {
    return (
    <button
        className = { cn(styles.button, className, {
            [styles.primary]: appearance === 'primary',
            [styles.like]: appearance === 'like',
            [styles.ghost]: appearance === 'ghost',
        }
        ) }
        { ...props }
    >
        { children }
        {arrow !== 'none' && <span className = {cn(styles.arrow, {
            [styles.down]: arrow === 'down',
        })}> <ChevronIcon /> </span>}

    </button>
    );
};