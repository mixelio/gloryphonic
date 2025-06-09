import {NavLink} from 'react-router-dom'
import styles from './Navigation.module.scss'
import {UserArea} from '../UserArea/UserArea';
import {useStore} from '../../app/store';
import {useMediaQuery} from 'react-responsive';

export const Navigation = () => {
  const menuStatus = useStore(state => state.menuStatus)
  const setMenuStatus = useStore(state => state.changeMenuStatus)
  const isDesktop = useMediaQuery({ query: '(min-width: 1200px'});

  const closeNavigation = () => {
    setMenuStatus('close')
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

          {!isDesktop && <UserArea />}
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