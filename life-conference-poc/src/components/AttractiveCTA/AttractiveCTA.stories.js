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
