import {Link} from 'react-router-dom';
import logo from '../../assets/images/icons/Logo.svg';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <Link to='/'>
          <img src={logo} alt='' />
        </Link>
      </div>
    </footer>
  );
}