import { questions } from '../../../data/questions.ts';
import { Question } from '../../Question/Question.tsx';
import styles from './QustionSection.module.scss';
import React, { useState } from 'react';

export const QuestionSection = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (e: React.SyntheticEvent, isExpanded: boolean) => {
    e.preventDefault();
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section>
      <div className={'container'}>
        <div className={styles.content}>
          <h2 className={`sectionTitle ${styles.title}`}>Часті питання</h2>
          {questions.map((question) => (
            <Question
              key={question.id}
              question={question}
              expandStatus={expanded}
              expandChanger={handleChange(String(question.id))}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
