import React from 'react';
import './BuyButton.css';

const BuyButton = ({ 
  onClick, 
  discount, 
  typography = true, 
  colors = true, 
  borders = true, 
  hover = true, 
  focus = true 
}) => {
  const classNames = [
    'buy-button',
    typography ? 'typography-spacing' : '',
    colors ? 'colors-contrast' : '',
    borders ? 'borders-shadow' : '',
    hover ? 'hover-active' : '',
    focus ? 'focus-outline' : ''
  ].join(' ');

  return (
    <button className={classNames} onClick={onClick}>
      Comprar Ingresso Agora
      {discount && <span className="discount-tag">{discount}</span>}
    </button>
  );
};

export default BuyButton;
