// src/components/BuyButton/BuyButton.stories.js
import React from 'react';
import BuyButton from './BuyButton';

export default {
  title: 'Components/BuyButton',
  component: BuyButton,
};

const Template = (args) => <BuyButton {...args} />;

// História padrão sem desconto
export const Default = Template.bind({});
Default.args = {
  onClick: () => alert('Ingresso comprado!'),
  typography: true,
  colors: true,
  borders: true,
  hover: true,
  focus: true,
};

// História com desconto
export const WithDiscount = Template.bind({});
WithDiscount.args = {
  onClick: () => alert('Ingresso comprado com desconto!'),
  discount: '20% OFF',
  typography: true,
  colors: true,
  borders: true,
  hover: true,
  focus: true,
};

// História com desconto personalizado
export const CustomDiscount = Template.bind({});
CustomDiscount.args = {
  onClick: () => alert('Ingresso comprado com desconto personalizado!'),
  discount: '30% OFF',
  typography: true,
  colors: true,
  borders: true,
  hover: true,
  focus: true,
};

// História sem bordas e sombra
export const WithoutBordersAndShadow = Template.bind({});
WithoutBordersAndShadow.args = {
  onClick: () => alert('Ingresso comprado!'),
  discount: '20% OFF',
  typography: true,
  colors: true,
  borders: false,
  hover: true,
  focus: true,
};

// História sem efeitos de hover
export const WithoutHoverEffects = Template.bind({});
WithoutHoverEffects.args = {
  onClick: () => alert('Ingresso comprado!'),
  discount: '20% OFF',
  typography: true,
  colors: true,
  borders: true,
  hover: false,
  focus: true,
};

// História com estilo mínimo
export const MinimalStyling = Template.bind({});
MinimalStyling.args = {
  onClick: () => alert('Ingresso comprado!'),
  discount: '20% OFF',
  typography: false,
  colors: false,
  borders: false,
  hover: false,
  focus: false,
};
