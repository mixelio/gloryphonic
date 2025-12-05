import { LinearProgress } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProfileInfo, getArtists } from '../../api/users.ts';

export const Me = () => {
  const myId = localStorage.getItem('authorizedUser') ?? null;
  // const [profileInfo, setProfileInfo] = useState<Artist | null>(null);
  // const [artists, setArtists] = useState<Artist[]>([]);
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
        const tempArtists = await getArtists();
        if (tempInfo) {
          console.log('tempArtist', tempArtists);
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

    </div>
  );
};
