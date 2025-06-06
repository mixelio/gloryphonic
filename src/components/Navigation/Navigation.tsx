import {NavLink} from 'react-router-dom'
import styles from './Navigation.module.scss'
import type {MenuStatus} from '../Header/Header';

type Props = {
  menuStatus: MenuStatus;
  setMenuStatus: React.Dispatch<React.SetStateAction<MenuStatus>>;
};

export const Navigation: React.FC<Props> = ({ menuStatus, setMenuStatus }) => {
  const closeNavigation = () => {
    setMenuStatus('close');
  };

  return (
    <nav className={`${styles.navigation} ${menuStatus}`}>
      <div className="container">
        <div className={styles.linksContainer}>
          <NavLink to={'/'} className="navLink" end onClick={closeNavigation}>
            Головна
          </NavLink>
          <NavLink to={'/about'} className="navLink" onClick={closeNavigation}>
            Про нас
          </NavLink>
          <NavLink to={'/artists'} className="navLink" onClick={closeNavigation}>
            Артисти
          </NavLink>
          <NavLink to={'/sponsorship'} className="navLink" onClick={closeNavigation}>
            Спонсорство
          </NavLink>
          <NavLink to={'/contacts'} className="navLink" onClick={closeNavigation}>
            Контакти
          </NavLink>
          <NavLink to={'/me'} className="navLink" onClick={closeNavigation}>
            Мій кабінет
          </NavLink>
        </div>
      </div>

      {/* <IconButton 
        aria-label="close navigation" 
        className={styles.closeBtn} 
        sx={{ position: 'absolute' }}
        onClick={menuToggle}
      >
        <ArrowBackIcon sx={{ color: primaryColors.main }} />
      </IconButton> */}
    </nav>
  );
};