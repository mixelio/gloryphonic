import Marquee from 'react-fast-marquee';
import { teamMembers, type TeamMemberType } from '../../../data/AboutUsInfo.ts';
import { TeamMember } from '../../TeamMember/TeamMember.tsx';
import styles from './TeamStripe.module.scss';

export const TeamStripe = () => {
  return (
    <section className={styles.teamStripe}>
      <div className="container">
        <h2>Наша команда</h2>
        <Marquee
          // pauseOnHover={true}
          gradient={true}
          gradientColor={'#0A0A0A'}
          style={{ overflowY: 'hidden', height: 'auto' }}
        >
          {teamMembers &&
            teamMembers.map((member: TeamMemberType) => (
              <TeamMember key={member.id} member={member} />
            ))}
        </Marquee>
      </div>
    </section>
  );
};
