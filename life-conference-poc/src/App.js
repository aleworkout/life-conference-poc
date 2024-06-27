// src/App.js
import React from 'react';
import BuyButton from './components/BuyButton/BuyButton';

const handleBuyClick = () => {
  // Lógica para redirecionar para a página de compra de ingressos
  window.location.href = '/comprar-ingresso';
};

function App() {
  return (
    <div className="App">
      <h1>Bem-vindo ao Evento</h1>
      <BuyButton onClick={handleBuyClick} discount="20% OFF" />
    </div>
  );
}

export default App;
