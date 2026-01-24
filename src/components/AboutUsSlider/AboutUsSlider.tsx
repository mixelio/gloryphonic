import useEmblaCarousel from 'embla-carousel-react';
import styles from './AboutUsSlider.module.scss';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import { aboutUsSlides } from '../../data/AboutUsInfo.ts';

export const AboutUsSlider = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, slidesToScroll: 1 }, [
    Autoplay({ playOnInit: true, delay: 7000, stopOnMouseEnter: false }),
    Fade(),
  ]);

  return (
    <div className={styles.embla__viewport} ref={emblaRef}>
      <div className={styles.embla__container}>
        {aboutUsSlides.length > 0 &&
          aboutUsSlides.map((slide) => (
            <div key={slide.id} className={styles.embla__slide}>
              <img src={slide.image as String} alt={slide.title} />
              <div className={`${styles.info_container}`}>
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
