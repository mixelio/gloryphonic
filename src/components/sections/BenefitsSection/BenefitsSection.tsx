import styles from './Benefits.module.scss';
import { benefits } from '../../../data/benefits.ts';
import { Benefit } from '../../Benefit/Benefit.tsx';

export const BenefitsSection = () => {
  return (
    <section className={'benefits'}>
      <div className="container">
        <div className={styles.benefitsContent}>
          {benefits.map((item) => (
            <Benefit key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
