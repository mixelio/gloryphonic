import { JoinSection } from '../../components/sections/JoinSection/JoinSection';
import { FirstScreenSection } from '../../components/sections/FirtsScreenSection/FirstScreenSection.tsx';
import { Divider } from '@mui/material';
import { BenefitsSection } from '../../components/sections/BenefitsSection/BenefitsSection.tsx';

export const MainPage = () => {
  return (
    <>
      <FirstScreenSection />
      <Divider sx={{ mt: 3, mb: 3 }} />
      <BenefitsSection />
      <Divider sx={{ mt: 3, mb: 3 }} />

      <Divider sx={{ mt: 3, mb: 3 }} />
      <JoinSection />
    </>
  );
};
