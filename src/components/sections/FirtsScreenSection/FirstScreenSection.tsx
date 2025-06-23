import { Button } from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import styles from './FirstScreenSection.module.scss';

export const FirstScreenSection = () => {
  return (
    <section className={styles.firstScreenSection}>
      <div className={styles.info}>
        <h1>Заяви про себе</h1>
        <p>
          Gloryphonic — це простір, де християнські виконавці та автори можуть реалізовувати свої
          музичні проекти. Підтримайте їх фінансово або приєднуйтесь, щоб разом прославляти Бога
          через музику.
        </p>
        <Button variant={'text'} sx={{ border: 'none' }} endIcon={<KeyboardDoubleArrowDownIcon />}>
          Дивись тут
        </Button>
      </div>
    </section>
  );
};
