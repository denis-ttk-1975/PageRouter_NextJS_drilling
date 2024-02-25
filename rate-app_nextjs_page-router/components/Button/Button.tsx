import { IButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';
export const Button = ({ appearance, children, className, ...props }: IButtonProps): JSX.Element => {
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
    </button>
    );
};