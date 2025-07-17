import { TeamStripe } from '../../components/sections/TeamStripe/TeamStripe.tsx';
import { AboutUsHero } from '../../components/sections/AboutUsHero/AboutUsHero.tsx';

export const AboutPage = () => {
  return (
    <div className="aboutPage">
      <div className="container">
        <AboutUsHero />
        <TeamStripe />
      </div>
    </div>
  );
};
