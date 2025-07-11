import { Alert, Box, Button, IconButton, TextField, Typography } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import React from 'react';
import { useState } from 'react';
import { completeRegistration, getLogin } from '../../../api/users.ts';
import { useNavigate, useSearchParams } from 'react-router-dom';
import type { RegData } from '../../../types/RegData.ts';

export const FirstPassword = ({ className = '' }: { className?: string }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showRepeaterPassword, setShowRepeatedPassword] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>('');
  const [alertStatus, setAlertStatus] = useState<'info' | 'warning' | 'error' | 'success'>('info');

  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if (formData) {
      if (formData.get('password')?.toString().trim() === '') {
        setAlertMessage('password should not be empty');
        setTimeout(() => {
          setAlertMessage('');
        }, 3000);
        return;
      }
    }
    if (
      formData.get('password')?.toString().trim() !==
      formData.get('repeatPassword')?.toString().trim()
    ) {
      setAlertMessage('passwords should be the same');
      setTimeout(() => {
        setAlertMessage('');
      }, 3000);
      return;
    }

    try {
      const regData: RegData = await completeRegistration({
        data: { password: formData.get('password')?.toString().trim() || '', token: token || '' },
      });

      if (regData) {
        setAlertStatus('success');
        setAlertMessage(`${regData.username} was successfully registered`);
        const data = {
          email: regData.email as string,
          password: formData.get('password') as string,
        };
        const tokens = await getLogin(data);
        if (tokens) {
          localStorage.setItem('success', tokens.access);
          localStorage.setItem('refresh', tokens.refresh);
          localStorage.setItem('authorizedUser', regData.email);
        }
        setTimeout(() => {
          navigate('me');
        }, 3000);
      }
    } catch (e) {
      console.error(e);
      setAlertStatus('error');
      setAlertMessage(e instanceof Error ? e.message : 'An error occurred');
    }
  };

  return (
    <Box component={'div'}>
      <Typography variant={'h2'} mb={3}>
        Create your password
      </Typography>
      <Box component={'form'} className={className} mb={3} onSubmit={handleSubmit}>
        <TextField
          variant={'outlined'}
          label={'Enter your password'}
          name={'password'}
          sx={{ width: '100%' }}
          type={showPassword ? 'text' : 'password'}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position={'end'}>
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
        <TextField
          variant={'outlined'}
          label={'repeat password'}
          name={'repeatPassword'}
          sx={{ width: '100%' }}
          type={showRepeaterPassword ? 'text' : 'password'}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position={'end'}>
                  <IconButton onClick={() => setShowRepeatedPassword(!showRepeaterPassword)}>
                    {showRepeaterPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />

        <Button variant={'contained'} type={'submit'}>
          створити пароль
        </Button>
      </Box>
      {alertMessage && (
        <Alert variant={'outlined'} severity={alertStatus}>
          {alertMessage}
        </Alert>
      )}
    </Box>
  );
};
