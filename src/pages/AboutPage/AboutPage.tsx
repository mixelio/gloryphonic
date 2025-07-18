import { TeamStripe } from '../../components/sections/TeamStripe/TeamStripe.tsx';
import { AboutUsHero } from '../../components/sections/AboutUsHero/AboutUsHero.tsx';
import { Divider } from '@mui/material';

export const AboutPage = () => {
  return (
    <div className="aboutPage">
      <div className="container">
        <AboutUsHero />
        <Divider sx={{ mt: 3, mb: 3, border: 'none' }} />
        <TeamStripe />
        <Divider sx={{ mb: 3, border: 'none' }} />
      </div>
    </div>
  );
};
