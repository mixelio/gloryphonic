import {Button} from '@mui/material'
import styles from './UserArea.module.scss'

export const UserArea = () => {
  return (
    <div className={styles.userArea}>
      <Button
        variant='contained'
        sx={{ 
          backgroundColor: '#FBB348', 
          color: '#000', 
          textTransform: 'capitalize', 
          fontSize: '1rem'}}
        onClick={() => {
          console.log('Login button')
        }}
      >
        Login
      </Button>
    </div>
  );
}