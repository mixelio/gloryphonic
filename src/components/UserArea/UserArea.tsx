import { Button } from '@mui/material';
import styles from './UserArea.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../../app/store';
import { useMediaQuery } from 'react-responsive';
import LogoutIcon from '@mui/icons-material/Logout';
import { passActions } from '../../types/passActions.ts';

export const UserArea = () => {
  const setMenuStatus = useStore((state) => state.changeMenuStatus);
  const authorizedUser = localStorage.getItem('authorizedUser');
  const navigate = useNavigate();

  const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });

  const handleLogin = async () => {
    localStorage.setItem('passAction', passActions.Login);
    navigate('registration');
  };

  const handleLogout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    localStorage.removeItem('authorizedUser');
    navigate('/');
  };

  return (
    <div className={styles.userArea}>
      {authorizedUser ? (
        <div className={styles.userActionBtns}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#FBB348',
              color: '#000',
              textTransform: 'capitalize',
              fontSize: '1rem',
              display: 'block',
            }}
            onClick={() => {
              setMenuStatus('close');
            }}
          >
            <Link
              to={`me`}
              style={{ color: 'inherit', textDecoration: 'none', whiteSpace: 'nowrap' }}
            >
              Мій кабінет
            </Link>
          </Button>
          <Button
            variant="outlined"
            sx={{
              textTransform: 'capitalize',
              fontSize: '1rem',
            }}
            onClick={handleLogout}
          >
            {!isDesktop ? 'Вийти' : <LogoutIcon />}
          </Button>
        </div>
      ) : (
        <Button
          variant="contained"
          className={styles.button}
          sx={{
            backgroundColor: '#FBB348',
            color: '#000',
            textTransform: 'capitalize',
            fontSize: '1rem',
          }}
          loading={false}
          onClick={handleLogin}
        >
          Увійти
        </Button>
      )}
    </div>
  );
};
