import React from 'react';
import type { EmblaCarouselType } from 'embla-carousel';
import styles from './EmblaDots.module.scss';

type Props = {
  scrollSnaps: number[];
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  emblaApi: EmblaCarouselType | undefined;
};

export const EmblaDots: React.FC<Props> = ({
  scrollSnaps,
  selectedIndex,
  setSelectedIndex,
  emblaApi,
}) => {
  return (
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
  );
};
