// src/components/HeaderInteractive/HeaderInteractive.js
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #2b2b2b; /* Cor de fundo roxa escura */
  color: #fff;
  padding: 20px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 20px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #32ff7e; /* Verde Neon */

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s;

  &:hover {
    color: #32ff7e;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 0;
    width: 100%;
    text-align: left;
  }
`;

const ActionButton = styled.button`
  background-color: #32ff7e;
  color: #2b2b2b;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #28d76e;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px 0;
    font-size: 1.2rem;
    margin-top: 10px;
  }
`;

const HeaderInteractive = () => {
  return (
    <HeaderContainer>
      <Logo>Life Conference Amazon 2024</Logo>
      <Nav>
        <NavLink href="#about">Sobre</NavLink>
        <NavLink href="#speakers">Palestrantes</NavLink>
        <NavLink href="#tickets">Ingressos</NavLink>
        <NavLink href="#contact">Contato</NavLink>
      </Nav>
      <ActionButton>Comprar Ingresso Agora</ActionButton>
    </HeaderContainer>
  );
};

export default HeaderInteractive;
