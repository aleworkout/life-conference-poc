// src/App.js
import React from 'react';
import SpeakersSection from './components/SpeakersSection/SpeakersSection';
import HeaderInteractive from './components/HeaderInteractive/HeaderInteractive';

const speakersData = [
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
];

/**
 * Renders the main application component.
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  return (
    <div className="App">
      <HeaderInteractive />
      <SpeakersSection speakers={speakersData} />
    </div>
  );
}

export default App;
