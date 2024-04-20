import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { ILayoutProps } from './Layout.props';
import { FunctionComponent } from 'react';
import styles from './Layout.module.css';
import { AppContextProvider, IAppContext } from '@/context/app.context';
// import cn from 'classnames';


const Layout = ({ children }: ILayoutProps): JSX.Element => {
     return (
     <div className = { styles.wrapper }>
        <Header className = { styles.header } />
            <Sidebar className = { styles.sidebar } />
            <div className = { styles.body } >
                {children}
            </div>
        <Footer className = { styles.footer } />
     </div>);
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
    return (props: T) => {
        return (
            <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
            <Component {...props} />
        </Layout>
        </AppContextProvider>
        );
    };
};