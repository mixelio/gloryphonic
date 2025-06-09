import {Link} from 'react-router-dom';
import logo from '../../assets/images/icons/Logo.svg';
import styles from './LogoLink.module.scss';
import {useStore} from '../../app/store';

export const LogoLink = () => {
  const setMenuStatus = useStore(state => state.changeMenuStatus)

  return (
    <Link to="/" className={styles.logoLink} onClick={() => setMenuStatus('close')}>
      <img src={logo} alt="" />
    </Link>
  );
}