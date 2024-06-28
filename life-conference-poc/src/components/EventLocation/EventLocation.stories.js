import React from 'react';
import EventLocation from './EventLocation';
import { FaParking, FaLock, FaSnowflake, FaToilet, FaUtensils } from 'react-icons/fa';

export default {
  title: 'Components/EventLocation',
  component: EventLocation,
};

const Template = (args) => <EventLocation {...args} />;

export const Default = Template.bind({});
Default.args = {
  address: '1234 Main St, Anytown, USA',
  instagram: 'https://www.instagram.com/location',
  benefits: [
    { icon: <FaParking />, text: 'Estacionamento' },
    { icon: <FaLock />, text: 'Segurança' },
    { icon: <FaSnowflake />, text: 'Ar-Condicionado' },
    { icon: <FaToilet />, text: 'Banheiros' },
    { icon: <FaUtensils />, text: 'Restaurantes' },
  ],
};
