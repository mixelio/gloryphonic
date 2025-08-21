import { Link } from 'react-router-dom';
import React from 'react';
import type { Artist } from '../../types/Artist.ts';
import styles from './ArtistCard.module.scss';

type Props = {
  artist: Artist;
  className?: string;
};

export const ArtistCard: React.FC<Props> = ({ artist, className }) => {
  return (
    <Link to={`/artists/${artist.id}`} className={`${styles.artistSlide} ${className}`}>
      <img src={artist.avatar} alt={artist.name} />
      <h3>{artist.name}</h3>
    </Link>
  );
};
