import {Button} from '@mui/material'
import styles from './UserArea.module.scss'
import {Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {useStore} from '../../app/store'
import {useMediaQuery} from 'react-responsive'
import LogoutIcon from '@mui/icons-material/Logout'

export const UserArea = () => {
  const setMenuStatus = useStore(state => state.changeMenuStatus)
  const [loginedUser, setLoginedUser] = useState<string | null>(localStorage.getItem('loginedUser') || null)
  const navigate = useNavigate()

  const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });

  return (
    <div className={styles.userArea}>
      {loginedUser ? (
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
              to={`/artists/${loginedUser}`}
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
          >
            {!isDesktop ? 'Вийти' : <LogoutIcon />}
          </Button>
        </div>
      ) : (
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#FBB348',
            color: '#000',
            textTransform: 'capitalize',
            fontSize: '1rem',
          }}
          onClick={() => {
            localStorage.setItem('loginedUser', '88');
            setLoginedUser('88');
            navigate(loginedUser ? `artists/${loginedUser}` : '/');
            setMenuStatus('close');
          }}
        >
          Login
        </Button>
      )}
    </div>
  );
}