import {Link} from 'react-router-dom';
import logo from '../../assets/images/icons/Logo.svg';
import styles from './LogoLink.module.scss';

export const LogoLink = () => {
  return (
    <Link to="/" className={styles.logoLink}>
      <img src={logo} alt="" />
    </Link>
  );
}