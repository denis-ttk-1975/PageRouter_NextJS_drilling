import { useContext } from 'react';
import styles from './Menu.module.css';
import cn from 'classnames';
import { AppContext } from '@/context/app.context';
import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface';

import CoursesIcon from './icons/courses.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import ServicesIcon from './icons/services.svg';
import { TopLevelCategory } from '@/interfaces/page.interface';

const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
  { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
  { route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products },
  { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
];
export const Menu = (): JSX.Element => {
  const { menu, firstCategory, setMenu } = useContext(AppContext);

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((firstMenuItem) => (
          <div key={firstMenuItem.route}>
            <a href={`/${firstMenuItem.route}`}>
              <div
                className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: firstMenuItem.id === firstCategory,
                })}
              >
                {firstMenuItem.icon}
                <span>{firstMenuItem.name}</span>
              </div>
            </a>
            {firstMenuItem.id === firstCategory && buildSecondLevel(firstMenuItem.route)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (route: string) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((secondMenuItem) => (
          <div key={secondMenuItem._id.secondCategory}>
            <div className={styles.secondLevel}>{secondMenuItem._id.secondCategory}</div>
            <div
              className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: secondMenuItem.isOpened,
              })}
            >
              {buildThirdLevel(secondMenuItem.pages, route)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((thirdMenuItem) => (
      <a
        href={`/${route}/${thirdMenuItem.alias}`}
        className={cn(styles.thirdLevel, {
          [styles.thirdLevelActive]: false,
        })}
      >
        {thirdMenuItem.category}
      </a>
    ));
  };

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
