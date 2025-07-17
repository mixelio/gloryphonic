import React from 'react';
import { Link } from 'react-router-dom';
import type { TeamMemberType } from '../../data/AboutUsInfo.ts';
import styles from './TeamMember.module.scss';

type Props = {
  member: TeamMemberType;
};

export const TeamMember: React.FC<Props> = ({ member }) => {
  return (
    <Link to={`member/${member.id}`} className={styles.TeamMember} style={{ marginInline: '20px' }}>
      <img src={member.image} alt={member.name} />
      <div className={styles.TeamMemberInfo}>
        <h3>{member.name}</h3>
        <p>{member.position}</p>
      </div>
    </Link>
  );
};
