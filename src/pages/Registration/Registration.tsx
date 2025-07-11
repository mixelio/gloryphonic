import { useEffect } from 'react';
import { Box } from '@mui/material';
import styles from './Registration.module.scss';
import { FirstPassword } from '../../components/sections/FirstPasswordSection/FirstPassword.tsx';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { passActions } from '../../types/passActions.ts';
import { LoginForm } from '../../components/LoginForm/LoginForm.tsx';

export const Registration = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const passAction = localStorage.getItem('passAction');

  const token = searchParams.get('token');

  useEffect(() => {
    console.log(passAction);
    if (token) {
      localStorage.setItem('passAction', passActions.CreatePassword);
    }
    if (!passAction) {
      navigate('/');
    }
  }, []);

  return (
    <Box component={'section'} className={styles.registration}>
      {passAction === passActions.CreatePassword && <FirstPassword className={styles.formFrame} />}
      {passAction === passActions.Login && <LoginForm className={styles.formFrame} />}
    </Box>
  );
};
