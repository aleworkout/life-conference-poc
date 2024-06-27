// src/components/SpeakersSection/SpeakersSection.stories.js
import React from 'react';
import SpeakersSection from './SpeakersSection';

export default {
  title: 'Components/SpeakersSection',
  component: SpeakersSection,
};

const Template = (args) => <SpeakersSection {...args} />;

// História padrão com lista de palestrantes
export const Default = Template.bind({});
Default.args = {
  speakers: [
    {
      id: 1,
      name: 'Paulo Muzi',
      bio: 'Médico, Empreśario, Especialista em Alta Performance.',
      image: '/images/paulo-muzi.png',
      links: [
        { url: 'https://instagram.com/paulo', icon: '📸' },
        { url: 'https://linkedin.com/in/paulo', icon: '🔗' },
      ],
  },
  {
    id: 2,
    name: 'Daniel Guedes',
    bio: 'Empresário, Nutricionista, Coach e Atleta de Alta Proffisional.',
    image: '/images/daniel-guedes.png',
    links: [
      { url: 'https://instagram.com/daniel', icon: '📸' },
      { url: 'https://linkedin.com/in/daniel', icon: '🔗' },
    ],
},
    // Mais palestrantes...
  ],
};
