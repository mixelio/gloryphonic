import { getArtists } from '../../../services/artistsGeter.ts';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import { IconButton } from '@mui/material';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import styles from './ArtistsSection.module.scss';
import type { Artist } from '../../../types/Artist.ts';
import { ArtistSlide } from '../../ArtistSlide/ArtistSlide.tsx';
import { theme } from '../../../theme.ts';
import Autoplay from 'embla-carousel-autoplay';
import { useMediaQuery } from 'react-responsive';

const primaryColor = theme.palette.primary.main;

export const ArtistsSection = () => {
  // const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 640px' });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, slidesToScroll: 1 }, [
    Autoplay({ playOnInit: true, delay: 9000, stopOnMouseEnter: false }),
  ]);
  const [artists, setArtists] = useState<Artist[]>([]);
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

  useEffect(() => {
    getArtists().then((data) => setArtists(data));
  }, []);

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
                  <ArtistSlide artist={artist} key={artist.id} className={styles.embla__slide} />
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
