import { Navigation } from '../Navigation/Navigation';
import { UserArea } from '../UserArea/UserArea';
import styles from './Header.module.scss';
import { useMediaQuery } from 'react-responsive';
import {TopAction} from '../TopAction/TopAction';
import {useState} from 'react';

export type MenuStatus = 'open' | 'close';

export const Header = () => {
  const [menuStatus, setMenuStatus] = useState<MenuStatus>('close');
  const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });
  
  return (
    <header className={styles.header}>
      <TopAction menuStatus={menuStatus} setMenuStatus={setMenuStatus} />
      <Navigation menuStatus={menuStatus} setMenuStatus={setMenuStatus} />
      {isDesktop && <UserArea />}
    </header>
  );
};
