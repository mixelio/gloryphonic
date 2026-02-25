// import { Alert, Box, Button, TextField, Typography, IconButton } from '@mui/material';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import React, { useState } from 'react';
// import InputAdornment from '@mui/material/InputAdornment';
// import PersonIcon from '@mui/icons-material/Person';
// import { useStore } from '../../app/store.ts';
// import { getLogin, getProfileInfo } from '../../api/users.ts';
// import { useNavigate } from 'react-router-dom';
//
// export const LoginForm = ({ className = '' }: { className: string }) => {
//   const waitingFormDone = useStore((state) => state.waitingFormDone);
//   const setWaitingFormDone = useStore((state) => state.setWaitingFormDone);
//
//   const navigate = useNavigate();
//
//   const [showPassword, setShowPassword] = useState(false);
//   const [alertMessage, setAlertMessage] = useState('');
//   const [alertStatus, setAlertStatus] = useState<'info' | 'warning' | 'error' | 'success'>('info');
//
//   // #todo: add check for existing user
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setWaitingFormDone(true);
//     const formData = new FormData(e.currentTarget);
//     const email = formData.get('email');
//     const password = formData.get('password');
//
//     if (!email || !password) {
//       setAlertMessage('Email and password are required');
//       setAlertStatus('warning');
//       setTimeout(() => {
//         setAlertMessage('');
//       }, 3000);
//       setWaitingFormDone(false);
//       return;
//     }
//
//     if (email.toString().trim().length == 0 || password.toString().trim().length === 0) {
//       setAlertMessage('Email and password should not be empty');
//       setAlertStatus('warning');
//       setTimeout(() => {
//         setAlertMessage('');
//       }, 3000);
//       setWaitingFormDone(false);
//       return;
//     }
//
//     try {
//       const data = {
//         email: email.toString().trim(),
//         password: password.toString().trim(),
//       };
//
//       const tokens = await getLogin(data);
//
//       await getLogin(data).then((res) => {
//         console.log(data, res);
//       });
//
//       if (tokens) {
//         localStorage.setItem('access', tokens.access);
//         localStorage.setItem('refresh', tokens.refresh);
//         setAlertStatus('success');
//         setAlertMessage('Welcome back!');
//         const user = await getProfileInfo();
//         setWaitingFormDone(false);
//         setTimeout(() => {
//           setAlertMessage('');
//           localStorage.setItem('authorizedUser', user.id.toString());
//           navigate('/me');
//         }, 3000);
//       }
//     } catch (e) {
//       console.log(JSON.stringify(e));
//       // setAlertMessage(e.toString());
//       setAlertStatus('error');
//       setTimeout(() => {
//         setAlertMessage('');
//       }, 3000);
//       setWaitingFormDone(false);
//     }
//   };
//
//   return (
//     <Box component={'div'}>
//       <Typography variant={'h2'} mb={3}>
//         Login to your account
//       </Typography>
//       <Box component={'form'} className={className} mb={3} onSubmit={handleSubmit}>
//         <TextField
//           disabled={waitingFormDone}
//           variant={'outlined'}
//           label={'Enter your email'}
//           name={'email'}
//           sx={{ width: '100%' }}
//           type={'text'}
//           slotProps={{
//             input: {
//               endAdornment: (
//                 <InputAdornment position={'end'} sx={{ padding: '8px' }}>
//                   <PersonIcon />
//                 </InputAdornment>
//               ),
//             },
//           }}
//         />
//         <TextField
//           variant={'outlined'}
//           label={'Enter your password'}
//           name={'password'}
//           sx={{ width: '100%' }}
//           type={showPassword ? 'text' : 'password'}
//           slotProps={{
//             input: {
//               endAdornment: (
//                 <InputAdornment position={'end'}>
//                   <IconButton onClick={() => setShowPassword(!showPassword)}>
//                     {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//                   </IconButton>
//                 </InputAdornment>
//               ),
//             },
//           }}
//         />
//
//         <Button variant={'contained'} type={'submit'} loading={waitingFormDone}>
//           Увійти
//         </Button>
//       </Box>
//       {alertMessage && (
//         <Alert variant={'outlined'} severity={alertStatus}>
//           {alertMessage}
//         </Alert>
//       )}
//     </Box>
//   );
// };
