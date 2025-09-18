import { Button } from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import styles from './FirstScreenSection.module.scss';
import useEmblaCarousel from "embla-carousel-react";
import { homeFirstScreen } from "../../../data/homeFirstScreen.ts";
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';

export const FirstScreenSection = () => {
  const handleScrollToJoinSection = () => {
    const joinSectionElement = document.querySelector('#joinSection-homepage');

    if (joinSectionElement) {
      joinSectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
                        <img src={item.image} alt=""/>
                    ))
                }
            </div>
        </div>
      <div className={styles.info}>
        <h1>Заяви про себе</h1>
        <p>
          Gloryphonic — це простір, де християнські виконавці та автори можуть реалізовувати свої
          музичні проекти. Підтримайте їх фінансово або приєднуйтесь, щоб разом прославляти Бога
          через музику.
        </p>
        <Button
          variant={'text'}
          sx={{ border: 'none' }}
          endIcon={<KeyboardDoubleArrowDownIcon />}
          onClick={handleScrollToJoinSection}
        >
          Дивись тут
        </Button>
      </div>
    </section>
  );
};
