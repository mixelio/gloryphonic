import React from 'react';
import type { TeamMemberType } from '../../data/AboutUsInfo.ts';
import styles from './TeamMember.module.scss';

type Props = {
  member: TeamMemberType;
};

export const TeamMember: React.FC<Props> = ({ member }) => {
  return (
    <div className={styles.TeamMember} style={{ marginInline: '20px' }}>
      <img src={member.image} alt={member.name} />
      <div className={styles.TeamMemberInfo}>
        <h3>{member.name}</h3>
        <p>{member.position}</p>
      </div>
    </div>
  );
};
