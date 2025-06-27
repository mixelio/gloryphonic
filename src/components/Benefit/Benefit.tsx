import styles from '../sections/BenefitsSection/Benefits.module.scss';
import React from 'react';

type Props = {
  item: {
    image: string;
    name: string;
    description: string;
  };
};

export const Benefit: React.FC<Props> = ({ item }) => {
  return (
    <div className={styles.benefit}>
      <img src={item.image} alt="guitar-player" />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
    </div>
  );
};
