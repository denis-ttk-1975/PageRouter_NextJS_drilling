import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { ILayoutProps } from './Layout.props';
// import styles from './Paragraph.module.css';
// import cn from 'classnames';


export const Layout = ({ children }: ILayoutProps): JSX.Element => {
     return (
     <>
        <Header/>
        <div style = {{ display: 'flex' }}>
            <Sidebar/>
            <div>
                {children}
            </div>
        </div>
        <Footer/>
     </>);
    };