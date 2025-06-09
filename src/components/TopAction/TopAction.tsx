import {IconButton, Zoom} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { theme } from '../../theme';
import styles from './TopAction.module.scss';
import {useMediaQuery} from 'react-responsive';
import {LogoLink} from '../LogoLink/LogoLink';
import {useStore} from '../../app/store';

const primaryColors = theme.palette.primary;

export const TopAction = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });
  const menuStatus = useStore(state => state.menuStatus);
  const setMenuStatus = useStore(state => state.changeMenuStatus)

  const menuToggle = () => {
    setMenuStatus(menuStatus === 'open' ? 'close' : 'open');
  }

  return (
    <div className={styles.topAction}>
      <LogoLink />
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