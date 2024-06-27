// src/App.js
import React from 'react';
import BuyButton from './components/BuyButton/BuyButton';
import SpeakersSection from './components/SpeakersSection/SpeakersSection';

const speakersData = [
  {
    id: 1,
    name: 'Paulo Muzi',
    bio: 'Especialista em Nutrição e Treinamento.',
    image: '/images/paulo-muzi.png',
    links: [
      { url: 'https://instagram.com/paulo', icon: '📸' },
      { url: 'https://linkedin.com/in/paulo', icon: '🔗' },
    ],
},
{
    id: 2,
    name: 'Daniel Guedes',
    bio: 'Especialista em Nutrição e Treinamento.',
    image: '/images/daniel-guedes.png',
    links: [
      { url: 'https://instagram.com/daniel', icon: '📸' },
      { url: 'https://linkedin.com/in/daniel', icon: '🔗' },
    ],
},
  
  // Mais palestrantes...
];

const handleBuyClick = () => {
  // Lógica para redirecionar para a página de compra de ingressos
  window.location.href = '/comprar-ingresso';
};

function App() {
  return (
    <div className="App">
      <HeaderInteractive />
      <SpeakersSection speakers={speakersData} />
      <BuyButton onClick={handleBuyClick} discount="20% OFF" />
    </div>
  );
}

export default App;
