import { LinearProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProfileInfo } from '../../api/users.ts';
import type { Artist } from '../../types/Artist.ts';

export const Me = () => {
  const myId = localStorage.getItem('authorizedUser') ?? null;
  const [profileInfo, setProfileInfo] = useState<Artist | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const initializeProfile = async () => {
      const accessToken = localStorage.getItem('access');
      if (!accessToken) {
        navigate('/');
        return;
      }

      try {
        const tempInfo = await getProfileInfo(accessToken);
        if (tempInfo) {
          setProfileInfo(tempInfo);
        }
      } catch (e) {
        console.error(e);
      }
    };

    initializeProfile();
  }, []);

  return !myId ? (
    <LinearProgress color="success" />
  ) : (
    <div className="mePage">
      <h1 className="pageTitle">It is my page</h1>
      <p>my id is {myId}</p>
      <p>and my email is {profileInfo?.email}</p>
    </div>
  );
};
