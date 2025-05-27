import {Link} from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { UserArea } from '../UserArea/UserArea';
import logo from '../../assets/images/icons/Logo.svg';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to='/'>
        <img src={logo} alt='' />
      </Link>
      <Navigation />
      <UserArea />
    </header>
  );
};
