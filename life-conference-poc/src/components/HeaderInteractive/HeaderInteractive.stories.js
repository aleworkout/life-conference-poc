// src/components/HeaderInteractive/HeaderInteractive.stories.js
import React from 'react';
import HeaderInteractive from './HeaderInteractive';

export default {
  title: 'Components/HeaderInteractive',
  component: HeaderInteractive,
};

const Template = (args) => <HeaderInteractive {...args} />;

export const Default = Template.bind({});
Default.args = {};
