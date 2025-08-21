import { useParams } from 'react-router-dom';
import { ProfileHeroSection } from '../../components/sections/ProfileHeroSection/ProfileHeroSection.tsx';
import { useFetchArtists } from '../../hooks/useFetchArtists.tsx';

export const Profile = () => {
  const { id } = useParams();
  const { artists } = useFetchArtists();
  const artist = id && artists ? artists.find((artist) => +artist.id === +id) : null;

  return <div className="profilePage">{artist && <ProfileHeroSection artist={artist} />}</div>;
};
