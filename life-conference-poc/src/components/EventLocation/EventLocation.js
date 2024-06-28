// Importações necessárias
import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaCopy, FaMapMarkedAlt, FaWaze, FaUber } from 'react-icons/fa';

// Estilização do container principal
const EventLocationContainer = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Estilização do título
const Title = styled.h2`
  margin-bottom: 10px;
  text-align: center;
`;

// Estilização do endereço
const Address = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  justify-content: center;
`;

// Estilização do texto do endereço
const AddressSpan = styled.span`
  flex: 1;
  font-size: 1em;
  text-align: center;
`;

// Estilização do botão de copiar
const CopyButton = styled.button`
  padding: 8px 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
  font-size: 0.9em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Estilização do link do Instagram
const InstagramLink = styled.a`
  display: block;
  margin-bottom: 15px;
  font-size: 1em;
  color: #d81b60;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
`;

// Estilização dos botões de navegação
const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  align-items: stretch;
`;

// Estilização de cada botão de navegação
const NavigationButton = styled.button`
  flex: 1;
  margin: 0 5px;
  padding: 10px;
  font-size: 0.9em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.bgColor || '#fff'};
  color: ${props => props.color || '#000'};
  min-height: 50px;
`;

// Estilização do container de benefícios
const BenefitsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

// Estilização de cada benefício
const Benefit = styled.div`
  flex: 1 0 48%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

// Estilização do texto do benefício
const BenefitText = styled.span`
  font-size: 0.9em;
`;

// Componente EventLocation
const EventLocation = ({ address, instagram, benefits }) => {
  // Função para copiar o endereço
  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    alert('Endereço copiado para o clipboard!');
  };

  return (
    <EventLocationContainer>
      <Title>Local do Evento</Title>
      <Address>
        <AddressSpan>{address}</AddressSpan>
        <CopyButton onClick={handleCopy}>
          Copiar <FaCopy />
        </CopyButton>
      </Address>
      <InstagramLink href={instagram} target="_blank" rel="noopener noreferrer">
        Visite o Instagram do Local <FaInstagram />
      </InstagramLink>
      <NavigationButtons>
        <NavigationButton bgColor="#4285f4" color="white" onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank')}>
          Google Maps <FaMapMarkedAlt />
        </NavigationButton>
        <NavigationButton bgColor="#ffcc00" color="black" onClick={() => window.open(`https://www.waze.com/ul?ll=${encodeURIComponent(address)}&navigate=yes`, '_blank')}>
          Waze <FaWaze />
        </NavigationButton>
        <NavigationButton bgColor="black" color="white" onClick={() => window.open(`https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[formatted_address]=${encodeURIComponent(address)}`, '_blank')}>
          Uber <FaUber />
        </NavigationButton>
      </NavigationButtons>
      <BenefitsContainer>
        {benefits.map((benefit, index) => (
          <Benefit key={index}>
            {benefit.icon}
            <BenefitText>{benefit.text}</BenefitText>
          </Benefit>
        ))}
      </BenefitsContainer>
    </EventLocationContainer>
  );
};

// Exportação do componente
export default EventLocation;