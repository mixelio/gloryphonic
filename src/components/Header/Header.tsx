import { Navigation } from '../Navigation/Navigation';
import { UserArea } from '../UserArea/UserArea';
import styles from './Header.module.scss';
import { useMediaQuery } from 'react-responsive';
import {TopAction} from '../TopAction/TopAction';

export type MenuStatus = 'open' | 'close';

export const Header = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });
  
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <TopAction />
          <Navigation />
          {isDesktop && <UserArea />}
        </div>
      </div>
    </header>
  );
};
