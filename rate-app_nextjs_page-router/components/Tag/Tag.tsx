import { ITagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({ size , href, color = 'ghost', className, children, ...props }: ITagProps): JSX.Element => {
    return <p
        className = {
            cn(
                styles.tag,
                className,
                {[styles.medium]: size === 'medium',
                [styles.small]: size === 'small',
                [styles.ghost]: color === 'ghost',
                [styles.red]: color === 'red',
                [styles.green]: color === 'green',
                [styles.grey]: color === 'grey',
                [styles.primary]: color === 'primary',}
                )
            }
        {...props}
        > { href ? <a href = {href}> { children } </a> :  <>{ children }</> }

        </p>;
    };