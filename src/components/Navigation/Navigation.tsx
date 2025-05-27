import {NavLink} from 'react-router-dom'
import styles from './Navigation.module.scss'

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <NavLink to={'/'} end>Головна</NavLink>
      <NavLink to={'/about'}>Про нас</NavLink>
      <NavLink to={'/artists'}>Артисти</NavLink>
      <NavLink to={'/sponsors'}>Спонсорство</NavLink>
      <NavLink to={'/contacts'}>Контакти</NavLink>
      <NavLink to={'/profile'}>Мій кабінет</NavLink>
    </nav>
  );
}