import styles from './Footer.module.scss';
import {LogoLink} from '../LogoLink/LogoLink';
import {Link} from 'react-router-dom';

import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import BusinessIcon from '@mui/icons-material/Business';
import {useMediaQuery} from 'react-responsive';

export const Footer = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <LogoLink />
          <div className={styles.contactsContainer}>
            <Link to="https://maps.app.goo.gl/yLn1CUJMtuei9dVY9" target="_blank">
              <BusinessIcon />
              Junghansstr. 9, 70469 Stuttgart Germany
            </Link>
            <Link to="mailto:gloryphonic@gmail.com">
              <MailOutlineIcon />
              gloryphonic@gmail.com
            </Link>
            <Link to="phone:+4916093143373">
              <CallIcon />
              +49 160 9314 33 73
            </Link>
            <Link to="phone:+380996579394">
              <CallIcon />
              +380 99 657 93 94
            </Link>
            <Link to="phone:+380689145004">
              <CallIcon />
              +380 68 914 50 04
            </Link>

          </div>
          <div className={styles.socialContainer}>
            <Link to="https://t.me/gloryphonic" target="_blank">
              <TelegramIcon fontSize={isDesktop ? 'large' : 'medium'} />
            </Link>
            <Link to="https://instagram.com/gloryphonic" target="_blank">
              <InstagramIcon fontSize={isDesktop ? 'large' : 'medium'} />
            </Link>
            <Link to="https://youtube.com/@gloryphonic" target="_blank">
              <YouTubeIcon fontSize={isDesktop ? 'large' : 'medium'} />
            </Link>
          </div>
        </div>
        <p style={{ textAlign: 'center', color: '#aaa' }}>
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}