import { IFooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';

export const Footer = ({ className, ...props }: IFooterProps): JSX.Element => {
    return <footer
        className = {
            cn(
                styles.footer,
                className,
                )
            }
        {...props}
        >
            <div className = { styles.copyrights }>OwlTop &copy; 2020 - {new Date().getFullYear()} Все права защищены</div>
            <a href="#" target="_blank" className = { styles.userAgreement }>Пользовательское соглашение</a>
            <a href="#" target="_blank" className = { styles.confidentialPolitic }>Политика конфиденциальности</a>
        </footer>;
    };