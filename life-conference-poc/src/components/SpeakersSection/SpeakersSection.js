// src/components/SpeakersSection/SpeakersSection.js
import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  padding: 50px;
  background-color: #f8f9fa;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 30px;
`;

const SpeakersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const SpeakerCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const SpeakerImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 15px;
`;

const SpeakerName = styled.h3`
  margin: 10px 0;
  font-size: 1.2rem;
  color: #333;
`;

const SpeakerBio = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const SpeakerLinks = styled.div`
  margin-top: 10px;

  a {
    margin: 0 5px;
    color: #007bff;
    text-decoration: none;
    font-size: 1.2rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SpeakersSection = ({ speakers }) => {
  return (
    <SectionContainer>
      <SectionTitle>Palestrantes</SectionTitle>
      <SpeakersGrid>
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.id}>
            <SpeakerImage src={speaker.image} alt={speaker.name} />
            <SpeakerName translate='no'>{speaker.name}</SpeakerName>
            <SpeakerBio translate='no'>{speaker.bio}</SpeakerBio>
            <SpeakerLinks>
              {speaker.links.map((link) => (
                <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.icon}
                </a>
              ))}
            </SpeakerLinks>
          </SpeakerCard>
        ))}
      </SpeakersGrid>
    </SectionContainer>
  );
};

export default SpeakersSection;
