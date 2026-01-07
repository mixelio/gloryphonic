import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import { IconButton } from '@mui/material';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import styles from './ArtistsSection.module.scss';
import { ArtistCard } from '../../ArtistCard/ArtistCard.tsx';
import { theme } from '../../../theme.ts';
// import Autoplay from 'embla-carousel-autoplay';
import { useMediaQuery } from 'react-responsive';
import { useFetchArtists } from '../../../hooks/useFetchArtists.tsx';

const primaryColor = theme.palette.primary.main;

export const ArtistsSection = () => {
  const { artists } = useFetchArtists();
  const isTablet = useMediaQuery({ query: '(min-width: 640px' });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, slidesToScroll: 1 });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi?.scrollSnapList);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);

    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  return (
    <section className="artists">
      <div className="container">
        <div className={styles.titleRow}>
          <h2>Артисти</h2>
          {isTablet && (
            <Link to={'/artists'} className={styles.linkToArtists}>
              Дивитися усіх
            </Link>
          )}
        </div>
        <div className={styles.embla}>
          <div className={styles.embla__viewport} ref={emblaRef}>
            <div className={styles.embla__container}>
              {artists.length > 0 &&
                artists.map((artist) => (
                  <ArtistCard artist={artist} key={artist.id} className={styles.embla__slide} />
                ))}
            </div>
          </div>
          <IconButton
            className={styles.embla__prev}
            onClick={scrollPrev}
            sx={{
              position: 'absolute',
              color: primaryColor,
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
          >
            <ArrowBackIosOutlinedIcon fontSize="large" />
          </IconButton>
          <IconButton
            className={styles.embla__next}
            onClick={scrollNext}
            sx={{
              position: 'absolute',
              color: primaryColor,
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
          >
            <ArrowForwardIosOutlinedIcon fontSize="large" />
          </IconButton>
        </div>

        <div className={styles.embla__dots}>
          {scrollSnaps.length > 0 &&
            scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`${styles.embla__dot} ${selectedIndex === index ? styles.active__dot : ''}`}
                onClick={() => {
                  setSelectedIndex(index);
                  emblaApi?.scrollTo(index);
                }}
              ></button>
            ))}
        </div>
        {!isTablet && (
          <Link to={'/artists'} className={styles.linkToArtists}>
            Дивитися усіх
          </Link>
        )}
      </div>
    </section>
  );
};
