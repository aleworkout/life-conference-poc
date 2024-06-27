// src/components/BuyButton/BuyButton.js
import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Button = styled.button`
  background-color: #ff6f61; /* Cor vibrante */
  color: #fff;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e55a4f;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const DiscountBadge = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: #4caf50; /* Cor de destaque para o desconto */
  color: #fff;
  padding: 5px 10px;
  border-radius: 50%;
  font-size: 0.9rem;
`;

const BuyButton = ({ onClick, discount }) => {
  return (
    <ButtonContainer>
      <Button onClick={onClick}>Comprar Ingresso Agora</Button>
      {discount && <DiscountBadge>{discount}</DiscountBadge>}
    </ButtonContainer>
  );
};

export default BuyButton;
