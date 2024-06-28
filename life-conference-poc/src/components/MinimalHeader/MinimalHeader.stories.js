// src/components/MinimalHeader/MinimalHeader.stories.js
import React from 'react';
import MinimalHeader from './MinimalHeader';
import logoImage from '../../assets/logo.png'; // Caminho da imagem da logo

export default {
  title: 'Components/MinimalHeader',
  component: MinimalHeader,
};

const Template = (args) => <MinimalHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  logoSrc: logoImage,
};
