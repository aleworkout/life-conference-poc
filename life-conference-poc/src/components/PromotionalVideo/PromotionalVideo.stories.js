import React from 'react';
import PromotionalVideo from './PromotionalVideo';

export default {
  title: 'Components/PromotionalVideo',
  component: PromotionalVideo,
};

const Template = (args) => <PromotionalVideo {...args} />;

export const InstagramHorizontal = Template.bind({});
InstagramHorizontal.args = {
  src: 'https://www.instagram.com/p/C7aPMACvZo8/embed',
  width: '560px',
  height: '315px',
};

export const InstagramVertical = Template.bind({});
InstagramVertical.args = {
  src: 'https://www.instagram.com/p/C7aPMACvZo8/embed',
  width: '315px',
  height: '560px',
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  src: 'https://www.instagram.com/p/C7aPMACvZo8/embed',
  width: '400px',
  height: '400px',
};
