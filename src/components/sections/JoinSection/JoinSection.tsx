import styles from './JoinSection.module.scss';
import { joinSteps } from '../../../data/joinSteps.ts';
import { Button } from '@mui/material';
import { useStore } from '../../../app/store.ts';

export const JoinSection = () => {
  const toggleJoinFormOpen = useStore((state) => state.toggleJoinFormOpen);

  return (
    <section className={styles.joinSection} id={'joinSection-homepage'}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Як стати учасником платформи Gloryphonic</h2>
        <p className={styles.introductionText}>
          Ставши частиною нашої спільноти, ви зможете реалізувати свої музичні проекти та отримати
          підтримку від слухачів. Ось що потрібно зробити:
        </p>

        <div className={styles.joinSteps}>
          {joinSteps &&
            joinSteps.map((step) => (
              <div className={styles.joinStep} key={step.id}>
                <div className={styles.joinStepTitleContainer}>
                  <span className={styles.joinStepNumber}>{step.id}</span>
                  <h2 className={styles.joinStepTitle}>{step.stepTitle}</h2>
                </div>
                <p>{step.stepDescription}</p>
              </div>
            ))}
        </div>
        <Button
          variant={'contained'}
          className={styles.joinButton}
          onClick={() => toggleJoinFormOpen(true)}
          size={'large'}
          sx={{
            display: 'block',
            transitionDuration: '0.3s',
            border: 'none',
            lineHeight: '100%',
            marginInline: 'auto',
          }}
        >
          <span>СТАТИ УЧАСНИКОМ</span>
        </Button>
      </div>
    </section>
  );
};
