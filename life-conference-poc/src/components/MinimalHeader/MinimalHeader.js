// src/components/MinimalHeader/MinimalHeader.js
import React from 'react';
import styled from 'styled-components';
import HeaderInteractive from '../HeaderInteractive/HeaderInteractive'; // Importar o componente HeaderInteractive

const MobileHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 150px;
  width: 100%;
  background-color: #32ff7e; /* Verde Neon */
  position: relative;
  z-index: 10;
  overflow: hidden;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.4); /* Adicionando sombra */
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;

  @media (min-width: 768px) {
    display: none;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ajusta a imagem para cobrir o espaço disponível */
  }
`;

const DesktopHeader = styled.header`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const LogoImage = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 10px; /* Ajustar conforme necessário */
`;

const MinimalHeader = ({ logoSrc }) => {
  return (
    <>
      <MobileHeader>
        <img src={logoSrc} alt="Life Conference Amazon 2024 Logo" />
      </MobileHeader>
      <DesktopHeader>
        <HeaderInteractive />
      </DesktopHeader>
    </>
  );
};

export default MinimalHeader;
