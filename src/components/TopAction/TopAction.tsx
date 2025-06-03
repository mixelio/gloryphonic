import {IconButton, Zoom} from '@mui/material';
import {Link} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import logo from '../../assets/images/icons/Logo.svg';
import { theme } from '../../theme';
import styles from './TopAction.module.scss';
import {useMediaQuery} from 'react-responsive';
import type {MenuStatus} from '../Header/Header';

const primaryColors = theme.palette.primary;

type Props = {
  menuStatus: MenuStatus;
  setMenuStatus: React.Dispatch<React.SetStateAction<MenuStatus>>;
};

export const TopAction: React.FC<Props> = ({menuStatus, setMenuStatus}) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });

  const menuToggle = () => {
    setMenuStatus(prevStatus => (prevStatus === 'open' ? 'close' : 'open'));
  }

  return (
    <div className={styles.topAction}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="" />
      </Link>
      {!isDesktop && (
        <IconButton onClick={menuToggle} className={styles.menuBtn} sx={{ position: 'relative' }}>
          <Zoom in={menuStatus === 'close'} timeout={600}>
            <MenuIcon fontSize="large" sx={{ color: primaryColors.main, position: 'absolute' }} />
          </Zoom>
          <Zoom in={menuStatus === 'open'} timeout={600}>
            <ArrowBackIcon fontSize="large" sx={{ color: primaryColors.main }} />
          </Zoom>
        </IconButton>
      )}
    </div>
  );
}