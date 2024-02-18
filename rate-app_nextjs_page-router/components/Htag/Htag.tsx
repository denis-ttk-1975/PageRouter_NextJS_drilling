import { IHtagProps } from './Htag.props';
import styles from './Htag.module.css';
export const Htag = ({ tag, children }: IHtagProps): JSX.Element => {
    return (
    <>
    {tag === 'h1' && <h1 className = { styles.h1 }>{ children }</h1> }
    {tag === 'h2' && <h2 className = { styles.h2 }>{ children }</h2> }
    {tag === 'header_title' && <h3 className = { styles.header_title }>{ children }</h3> }
    </>
    );
};