import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: ${(props) => props.width};
  margin: 0 auto;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.4); /* Sombra */
  overflow: hidden;
  border-radius: 10px;
`;

const VideoFrame = styled.iframe`
  width: 100%;
  height: ${(props) => props.height};
  border: none;
`;

const PromotionalVideo = ({ src, width, height }) => {
  return (
    <VideoContainer width={width} height={height}>
      <VideoFrame src={src} height={height} allowFullScreen />
    </VideoContainer>
  );
};

PromotionalVideo.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

PromotionalVideo.defaultProps = {
  width: '100%',
  height: '315px', // Altura padrão para vídeos horizontais, ajuste conforme necessário
};

export default PromotionalVideo;
