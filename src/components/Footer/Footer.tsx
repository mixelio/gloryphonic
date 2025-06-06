import styles from './Footer.module.scss';
import {LogoLink} from '../LogoLink/LogoLink';
import {Link} from 'react-router-dom';

import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import BusinessIcon from '@mui/icons-material/Business';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <LogoLink />
          <div className={styles.contactsContainer}>
            <Link to="https://maps.app.goo.gl/yLn1CUJMtuei9dVY9" target="_blank">
              <BusinessIcon />
              12345 Hauptstrasse 67, Stuttgart, Germany
            </Link>
            <Link to="mailto:info@gloryphonic.com">
              <MailOutlineIcon />
              info@gloryphonic.com
            </Link>
            <Link to="phone:+49 876 54 321">
              <CallIcon />
              +49 876 54 321
            </Link>
          </div>
          <div className={styles.socialContainer}>
            <Link to="https://telegram.com" target="_blank">
              <TelegramIcon />
            </Link>
            <Link to="https://instagram.com" target="_blank">
              <InstagramIcon />
            </Link>
            <Link to="https://facebook.com" target="_blank">
              <FacebookIcon />
            </Link>
          </div>
        </div>
        <p style={{ textAlign: 'center', color: '#aaa' }}>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}