import type { Artist } from '../../../types/Artist.ts';
import styles from './ProfileHeroSection.module.scss';

export const ProfileHeroSection = ({ artist }: { artist: Artist }) => {
  return (
    <section className={styles.profileHeroSection}>
      <div className="container">
        <div className={styles.profileHeroSection__content}>
          <h1 className={styles.profileHeroSection__title}>{artist.name}</h1>
          <ul className={styles.profileHeroSection__infoBox}>
            <li>
              <span>Альбоми</span>
              <span>3</span>
            </li>
            <li>
              <span>Підписники</span>
              <span>2154</span>
            </li>{' '}
            <li>
              <span>Відео</span>
              <span>27</span>
            </li>{' '}
            <li>
              <span>Країна</span>
              <span>Україна</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
