import { CircularProgress, Divider, LinearProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getProfileInfo, getArtists } from '../../api/users.ts';
import type { Artist } from '../../types/Artist.ts';

export const Me = () => {
  const myId = localStorage.getItem('authorizedUser') ?? null;
  const [profileInfo, setProfileInfo] = useState<Artist | null>(null);
  const [artists, setArtists] = useState<Artist[]>([]);
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
        const tempArtists = await getArtists(accessToken);
        if (tempInfo) {
          setProfileInfo(tempInfo);
          setArtists(tempArtists);
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
      <h1 className="pageTitle">{profileInfo?.is_staff ? 'Admin' : profileInfo?.name}</h1>

      <Divider sx={{ mb: 3, mt: 3 }} />

      {artists.length > 0 ? (
        artists.map((artist) =>
          !artist.is_staff ? <Link to={`/artists/${artist.id}/edit`}>{artist.id}</Link> : null
        )
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};
