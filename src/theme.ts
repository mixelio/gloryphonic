import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: '1px solid #FBB348',
          '&.MuiButton-loading': {
            border: '1px solid #FBB348',
          },
        },
      },
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      light: '#FBC26C',
      main: '#FBB348',
      dark: '#AF7D32',
    },
  },
  typography: {
    fontFamily: 'Comfortaa, sans-serif',
  },
});