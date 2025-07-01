import { Accordion } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import React from 'react';
import type { question } from '../../data/questions.ts';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import styles from './Question.module.scss';

type Props = {
  question: question;
  expandStatus?: string | false;
  expandChanger?: (e: React.SyntheticEvent, isExpanded: boolean) => void;
};

export const Question: React.FC<Props> = ({ question, expandStatus, expandChanger }) => {
  // const [expanded, setExpanded] = useState<string | false>(false);
  //
  // const handleChange = (panel: string) => (e: React.SyntheticEvent, isExpanded: boolean) => {
  //   e.preventDefault();
  //   setExpanded(isExpanded ? panel : false);
  // };
  return (
    <Accordion
      expanded={expandStatus === String(question.id)}
      sx={{
        margin: '0',
        borderTop: 'none',
        background: 'transparent',
        '&::before': { display: 'none' },
        '&:not(:last-child)': {
          borderBottom: '0.5px solid grey',
        },
      }}
      onChange={expandChanger}
    >
      <AccordionSummary
        id={`${question.id}`}
        expandIcon={
          expandStatus === String(question.id) ? <RemoveCircleOutlineIcon /> : <ControlPointIcon />
        }
        sx={{ '&:hover': { cursor: 'pointer' } }}
        aria-controls={`${question.id}-content`}
        className={styles.summary}
      >
        {question.questionText}
      </AccordionSummary>
      <AccordionDetails id={`${question.id}-content`} className={styles.details}>
        {question.answerText}
      </AccordionDetails>
    </Accordion>
  );
};
