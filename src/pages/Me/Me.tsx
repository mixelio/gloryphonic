import {LinearProgress} from '@mui/material';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

export const Me = () => {
  const myId = localStorage.getItem('loginedUser') ?? null;
  const navigate = useNavigate();

  useEffect(() => {
    if (!myId) {
      navigate('/');
    }
  }, [])


  return !myId ? (
    <LinearProgress color="success" />
  ) : (
    <div className='mePage'>
      <h1 className='pageTitle'>It is my page</h1>
      <p>my id is {myId}</p>
    </div>
  );
}