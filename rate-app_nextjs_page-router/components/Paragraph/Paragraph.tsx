import { IParagraphProps } from './Paragraph.props';
import styles from './Paragraph.module.css';
import cn from 'classnames';

export const Paragraph = ({ typography = 'medium', className, children, ...props }: IParagraphProps): JSX.Element => {
     return <p
         className = {
            cn(
                styles.paragraph,
                className,
                {[styles.medium]: typography === 'medium', [styles.large]: typography === 'large', [styles.small]: typography === 'small',}
                )
            }
        {...props}
        >
            { children }
        </p>;
    };