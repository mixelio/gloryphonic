import { TeamStripe } from '../../components/sections/TeamStripe/TeamStripe.tsx';
import { AboutUsHeroSection } from '../../components/sections/AboutUsHeroSection/AboutUsHeroSection.tsx';
import { Divider } from '@mui/material';

export const AboutPage = () => {
  return (
    <div className="aboutPage">
      <AboutUsHeroSection />
      <Divider sx={{ mt: 3, mb: 3, border: 'none' }} />
      <TeamStripe />
      <Divider sx={{ mb: 3, border: 'none' }} />
    </div>
  );
};
