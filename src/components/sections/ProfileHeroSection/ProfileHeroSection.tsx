import type { Artist } from '../../../types/Artist.ts';
import styles from './ProfileHeroSection.module.scss';

export const ProfileHeroSection = ({ artist }: { artist: Artist }) => {
  return (
    <section
      className={styles.profileHeroSection}
      style={{
        backgroundImage: `url(${artist?.images[0]?.image}`,
      }}
    >
      <div className="container">
        <div className={styles.profileHeroSection__content}>
          <h1 className={styles.profileHeroSection__title}>{artist?.name}</h1>
          <ul className={styles.profileHeroSection__infoBox}>
            <li>
              <span>Альбоми</span>
              <span>{artist?.albums?.length}</span>
            </li>
            <li>
              <span>Підписники</span>
              <span>{artist?.followers?.length}</span>
            </li>{' '}
            <li>
              <span>Жанри</span>
              <span>
                {artist?.genre?.map((item) => (
                  <span>{item?.name}</span>
                ))}
              </span>
            </li>{' '}
            <li>
              <span>Країна</span>
              <span>{artist.country}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
