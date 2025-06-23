import styles from './Benefits.module.scss';
import { benefits } from '../../../data/benefits.ts';

export const BenefitsSection = () => {
  return (
    <section className={'benefits'}>
      <div className="container">
        <div className={styles.benefitsContent}>
          {benefits.map((item) => (
            <div className={styles.benefit} key={item.id}>
              <img src={item.image} alt="guitar-player" />
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
