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
  image: string | {};
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
    title: 'Gloryphonic',
    description:
      'християнська музична платформа та продюсерський простір для музикантів, авторів та слухачів.\n' +
      ' Ми створили Gloryphonic, щоб підтримати розвиток християнської музики і допомогти музикантам реалізувати творчі ідеї.',
  },
  {
    id: 2,
    image: slide2,
    title: 'Що ми робимо?',
    description:
    `
      Підтримуємо створення християнської музики - Допомагаємо музикантам і авторам знайти аудиторію - Надаємо простір для продюсування та розвитку - Створюємо спільноту, де слухачі можуть підтримувати артистів
    `
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
