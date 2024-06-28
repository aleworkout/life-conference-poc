import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    display: none;

    @media (max-width: 767px) {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        bottom: 10px;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: ${props => props.width || '90%'}; /* Valor padrão: 90% */
        max-width: 400px;
        padding: 10px 20px;
        background-color: #32ff7e; /* Verde Neon */
        color: #fff;
        border-radius: 30px;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.4); /* Sombra */
        z-index: 1000;
        cursor: pointer;
        text-align: center;
    }
`;

const Icon = styled.span`
    margin-right: 10px;
`;

const AttractiveCTA = ({ icon, text, onClick, width }) => {
    return (
        <Container width={width} onClick={onClick}>
            <Icon>{icon}</Icon>
            {text}
        </Container>
    );
};

AttractiveCTA.propTypes = {
    icon: PropTypes.element.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    width: PropTypes.string, // Nova prop para o width do botão
};

export default AttractiveCTA;
