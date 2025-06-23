import player from '../assets/images/icons/guitar-player.svg';
import listener from '../assets/images/icons/music-listener.svg';
import coin from '../assets/images/icons/man-with-coin.svg';
import prayer from '../assets/images/icons/prayer.svg';

type benefit = {
  id: number;
  image: string;
  name: string;
  description: string;
};

export const benefits: benefit[] = [
  {
    id: 1,
    image: player,
    name: 'Платформа для творчості',
    description:
      'Ми надаємо вам простір, де ви зможете реалізовувати свої музичні проекти, отримувати підтримку та поширювати свої твори.',
  },
  {
    id: 2,
    image: listener,
    name: 'Професійна підтримка',
    description:
      'Ваша музика буде оточена увагою професіоналів: продюсерів, звукорежисерів, музикантів та аранжувальників, які допоможуть вам створити якісний продукт.',
  },
  {
    id: 3,
    image: coin,
    name: 'Фінансова допомога',
    description:
      'Gloryphonic дозволяє вашим шанувальникам та слухачам підтримати вас фінансово, що допоможе вам зосередитися на творчості.',
  },
  {
    id: 4,
    image: prayer,
    name: 'Духовне зростання',
    description:
      'Ми допомагаємо не лише технічно, а й творчо й духовно розкрити ваш потенціал, оскільки кожен проект — це не просто музика, а місія служити через музику.',
  },
];
