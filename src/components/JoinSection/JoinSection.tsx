import styles from './JoinSection.module.scss';
import { joinSteps } from '../../data/joinSteps';

export const JoinSection = () => {
  return (
    <section className={styles.joinSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Як стати учасником платформи Gloryphonic</h2>
        <p className={styles.intruductionText}>
          Ставши частиною нашої спільноти, ви зможете реалізувати свої музичні проекти та отримати
          підтримку від слухачів. Ось що потрібно зробити:
        </p>

        <div className={styles.joinSteps}>
          {joinSteps &&
            joinSteps.map((step) => (
              <div className={styles.joinStep} key={step.id}>
                <div className={styles.joinStepTitleContainer}>
                  <span className={styles.joinStepNumber}>{step.id}</span>
                  <h2 className={styles.joinStepTitel}>{step.stepTitle}</h2>
                </div>
                <p>{step.stepDescription}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}