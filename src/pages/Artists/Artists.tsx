import { Outlet, useLocation } from 'react-router-dom';
import { useFetchArtists } from '../../hooks/useFetchArtists.tsx';
import { ArtistCard } from '../../components/ArtistCard/ArtistCard.tsx';
import styles from './Artists.module.scss';

export const Artists = () => {
  const { artists } = useFetchArtists();
  const location = useLocation();
  const isArtistPage = location.pathname.startsWith('/artists/');

  return (
    <div className={styles.artistsPage}>
      {isArtistPage ? (
        <Outlet />
      ) : (
        <section className={styles.artistsList}>
          <div className="container">
            <div className={styles.artistsGrid}>
              {artists.map((artist) => (
                <ArtistCard artist={artist} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
