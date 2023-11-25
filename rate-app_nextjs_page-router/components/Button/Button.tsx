import { IButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';
export const Button = ({ appearance, children }: IButtonProps): JSX.Element => {
    return (
    <button className = { cn(styles.button, {[styles.primary]: appearance === 'primary', [styles.like]: appearance === 'like',}) }>{ children }</button>
)
}