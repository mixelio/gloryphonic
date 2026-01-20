import styles from './FirstScreenSection.module.scss';
import FastForwardIcon from '@mui/icons-material/FastForward';
import useEmblaCarousel from "embla-carousel-react";
import { homeFirstScreen } from "../../../data/homeFirstScreen.ts";
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import {Link} from "react-router-dom";

export const FirstScreenSection = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true}, [
      Autoplay({ playOnInit: true, delay: 7000, stopOnMouseEnter: false }),
      Fade(),
    ])

  return (
    <section className={styles.firstScreenSection}>
      <div className={styles.embla__viewport} ref={emblaRef}>
            <div className={styles.embla__container}>
                {
                    homeFirstScreen.length > 0 &&
                    homeFirstScreen.map(item => (
                        <img src={item.image} alt="" />
                    ))
                }
            </div>
        </div>
      <div className={styles.info}>
        <h1>Gloryphonic</h1>
        <p>
          Християнська музична платформа та продюсерський простір. Створення, розвиток і підтримка християнської музики та музикантів.
        </p>
        <Link
          to={'/artists'}
        >
            Дивись учасників
            <FastForwardIcon />
        </Link>
      </div>
    </section>
  );
};
