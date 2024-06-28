// src/App.js
import React from 'react';
import SpeakersSection from './components/SpeakersSection/SpeakersSection';
import MinimalHeader from './components/MinimalHeader/MinimalHeader';
import logoImage from './assets/logo.png'; // Caminho da imagem da logo
import AttractiveCTA from './components/AttractiveCTA/AttractiveCTA';
import { FaTicketAlt } from 'react-icons/fa'; // Importando um ícone específico
import EventLocation from './components/EventLocation/EventLocation';
import { FaParking, FaLock, FaSnowflake, FaToilet, FaUtensils } from 'react-icons/fa';

// Defina os benefícios ou obtenha-os de outra fonte
const benefits = [
  { icon: <FaParking />, text: 'Estacionamento' },
  { icon: <FaLock />, text: 'Segurança' },
  { icon: <FaSnowflake />, text: 'Ar-Condicionado' },
  { icon: <FaToilet />, text: 'Banheiros' },
  { icon: <FaUtensils />, text: 'Restaurantes' },
];


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

const handleClick = () => {
  console.log('CTA clicado!');
};

/**
 * Renders the main application component.
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  return (
    <div className="App">
      <MinimalHeader logoSrc={logoImage} rounded={true} />  
      <SpeakersSection speakers={speakersData} />
      <EventLocation 
        address="1234 Main St, Anytown, USA"
        instagram="https://www.instagram.com/location"
        benefits={benefits}
      />
      <AttractiveCTA
        icon={<FaTicketAlt />}
        text="Comprar Ingressos"
        onClick={handleClick}
        width={'300px'}
        buttonColor={'#020002'}
        textColor={'#A8FF00'}
      />
    </div>
  );
}

export default App;
