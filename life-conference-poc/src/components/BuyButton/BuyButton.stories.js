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
};

// História com desconto
export const WithDiscount = Template.bind({});
WithDiscount.args = {
  onClick: () => alert('Ingresso comprado com desconto!'),
  discount: '20% OFF',
};

// História com desconto personalizado
export const CustomDiscount = Template.bind({});
CustomDiscount.args = {
  onClick: () => alert('Ingresso comprado com desconto personalizado!'),
  discount: '30% OFF',
};
