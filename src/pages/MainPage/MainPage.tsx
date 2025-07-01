import { JoinSection } from '../../components/sections/JoinSection/JoinSection';
import { FirstScreenSection } from '../../components/sections/FirtsScreenSection/FirstScreenSection.tsx';
import { Divider } from '@mui/material';
import { BenefitsSection } from '../../components/sections/BenefitsSection/BenefitsSection.tsx';
import { ArtistsSection } from '../../components/sections/ArtistsSection/ArtistsSection.tsx';
import { QuestionSection } from '../../components/sections/QuestionsSection/QuestionSection.tsx';

export const MainPage = () => {
  return (
    <>
      <FirstScreenSection />
      <Divider sx={{ mt: 3, mb: 3 }} />
      <BenefitsSection />
      <Divider sx={{ mt: 3, mb: 3 }} />
      <ArtistsSection />
      <Divider sx={{ mt: 3, mb: 3 }} />
      <JoinSection />
      <Divider sx={{ mt: 3, mb: 3 }} />
      <QuestionSection />
    </>
  );
};
