import useEmblaCarousel from 'embla-carousel-react';
import styles from './AboutUsSlider.module.scss';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';
import { aboutUsSlides } from '../../data/AboutUsInfo.ts';
import { EmblaDots } from '../EmblaDots/EmblaDots.tsx';

export const AboutUsSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, slidesToScroll: 1 }, [
    Autoplay({ playOnInit: true, delay: 7000, stopOnMouseEnter: false }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
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

  return (
    <>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {aboutUsSlides.length > 0 &&
            aboutUsSlides.map((slide) => (
              <div key={slide.id} className={styles.embla__slide}>
                <img src={slide.image} alt={slide.title} />
                <div className={styles.info_container}>
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                </div>
              </div>
            ))}
        </div>
        <div className={styles.sliderNavigation}>
          <EmblaDots
            scrollSnaps={scrollSnaps}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            emblaApi={emblaApi}
          />
        </div>
      </div>
    </>
  );
};
