import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { ILayoutProps } from './Layout.props';
import { FunctionComponent } from 'react';
// import styles from './Paragraph.module.css';
// import cn from 'classnames';


const Layout = ({ children }: ILayoutProps): JSX.Element => {
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

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent (props: T) {
        return (
        <Layout>
            <Component {...props} />
        </Layout>
        );
    };
};