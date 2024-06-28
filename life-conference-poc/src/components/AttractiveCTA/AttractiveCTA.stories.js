import React from 'react';
import AttractiveCTA from './AttractiveCTA';
import { action } from '@storybook/addon-actions';
import { FaTicketAlt, FaRegQuestionCircle } from 'react-icons/fa';

export default {
  title: 'Components/AttractiveCTA',
  component: AttractiveCTA,
};

const Template = (args) => <AttractiveCTA {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <FaTicketAlt />,
  text: 'Comprar Ingressos',
  onClick: action('cta-click'),
};

export const Form = Template.bind({});
Form.args = {
  icon: <FaRegQuestionCircle />,
  text: 'Preencher Formulário',
  onClick: action('form-click'),
};

export const SmallButton = Template.bind({});
SmallButton.args = {
    icon: <FaTicketAlt />,
    text: 'Small Button',
    onClick: action('small-button-click'),
    width: '100px',
};

export const MediumButton = Template.bind({});
MediumButton.args = {
    icon: <FaRegQuestionCircle />,
    text: 'Medium Button',
    onClick: action('medium-button-click'),
    width: '200px',
};

export const LargeButton = Template.bind({});
LargeButton.args = {
    icon: <FaRegQuestionCircle />,
    text: 'Large Button',
    onClick: action('large-button-click'),
    width: '300px',
};

export const BlueButton = Template.bind({});
BlueButton.args = {
    icon: <FaTicketAlt />,
    text: 'Blue Button',
    onClick: action('blue-button-click'),
    buttonColor: 'blue',
    textColor: 'white',
};

export const RedButton = Template.bind({});
RedButton.args = {
    icon: <FaRegQuestionCircle />,
    text: 'Red Button',
    onClick: action('red-button-click'),
    buttonColor: 'red',
    textColor: 'white',
};

export const GreenButton = Template.bind({});
GreenButton.args = {
    icon: <FaRegQuestionCircle />,
    text: 'Green Button',
    onClick: action('green-button-click'),
    buttonColor: 'green',
    textColor: 'white',
};

export const CustomButton = Template.bind({});
CustomButton.args = {
    icon: <FaTicketAlt />,
    text: 'Custom Button',
    onClick: action('custom-button-click'),
    buttonColor: '#020002',
    textColor: '#A8FF00',
    width: '300px',
};