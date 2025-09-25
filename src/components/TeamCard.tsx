import React from 'react';
import { TeamMember } from '../types';

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="team-card">
      <img src={member.image} alt={member.name} className="team-image" />
      <div className="team-content">
        <h3 className="team-name">{member.name}</h3>
        <p className="team-role">{member.role}</p>
        <p className="team-description">{member.description}</p>
        <div className="team-social">
          {member.socialLinks.linkedin && (
            <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin-in"></i>
            </a>
          )}
          {member.socialLinks.instagram && (
            <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
          )}
          {member.socialLinks.twitter && (
            <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;