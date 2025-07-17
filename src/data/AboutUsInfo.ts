import Andrew from './../assets/images/content/team/Andrew.jpg';
import Tony from './../assets/images/content/team/Tony.jpg';
import Michel from './../assets/images/content/team/Michel.jpg';
import Yewgen from './../assets/images/content/team/Yewgen.jpg';
import Lex from './../assets/images/content/team/Lex.jpg';
import slide1 from './../assets/images/content/slide1.jpg';
import slide2 from './../assets/images/content/slide2.jpg';
import slide3 from './../assets/images/content/slide3.jpg';

export type AboutUsSliderItem = {
  id: number;
  image: string;
  title: string;
  description: string;
};

export type TeamMemberType = {
  id: number;
  name: string;
  position: string;
  image: string;
};

export const aboutUsSlides: AboutUsSliderItem[] = [
  {
    id: 1,
    image: slide1,
    title: 'Про нас',
    description:
      'Gloryphonic — це платформа, яка об’єднує музикантів, слухачів та професіоналів індустрії для створення якісної музики з метою служіння.',
  },
  {
    id: 2,
    image: slide2,
    title: 'Наша місія',
    description:
      'Ми прагнемо допомогти музикантам реалізувати свій потенціал, створюючи музику, яка надихає та змінює життя людей.',
  },
  {
    id: 3,
    image: slide3,
    title: 'Наша команда',
    description:
      'Команда Gloryphonic складається з досвідчених професіоналів, які готові підтримати вас на кожному етапі вашого музичного шляху.',
  },
];

export const teamMembers: TeamMemberType[] = [
  {
    id: 1,
    name: 'Андрій Корнєєв',
    position: 'Засновник, CEO, Продюсер',
    image: Andrew,
  },
  {
    id: 2,
    name: 'Михайло Губко',
    position: 'Співзасновник, CTO, Frontend Developer',
    image: Michel,
  },
  {
    id: 3,
    name: 'Олексій Арутюнов',
    position: 'Дизайнер, UX/UI',
    image: Lex,
  },
  {
    id: 4,
    name: 'Тоні Саєнко',
    position: 'Продюсер, Sound Engineer, Гітарист',
    image: Tony,
  },
  {
    id: 5,
    name: 'Євген Волкодав',
    position: 'Відеоінженер, Drummer',
    image: Yewgen,
  },
];
