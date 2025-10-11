import { useParams } from 'react-router-dom';
import { ProfileHeroSection } from '../../components/sections/ProfileHeroSection/ProfileHeroSection.tsx';
import { SelfDescriptionSection } from '../../components/sections/SelfDescriptionSection/SelfDescriptionSection.tsx';
import { CommentsByProfile } from '../../components/sections/CommentsByProfile/CommentsByProfile.tsx';
import { useFetchArtists } from '../../hooks/useFetchArtists.tsx';
import { Divider } from '@mui/material';

export const Profile = () => {
  const { id } = useParams();
  const { artists } = useFetchArtists();
  const artist = id && artists ? artists.find((artist) => +artist.id === +id) : null;

  return (
    <>
      {artist &&
        <div className="profilePage">
          <ProfileHeroSection artist={artist} />
          <Divider sx={{mb: 4, mt: 4}} />
          <SelfDescriptionSection artist={artist} />
          <Divider sx={{mb: 4, mt: 4}} />
          <CommentsByProfile artist={artist} />
        </div>
      }
    </>
  );
};
