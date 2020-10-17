import React from 'react';
import PropTypes from 'prop-types';
import { Title, SubTitle, Container } from './index.style';
import { Logo } from '../index';

const LogoComTexto = ({ text, withTitle, logoSize, containerSize }) => (
  <Container containerSize={containerSize}>
    { withTitle &&<Title>A2P2</Title> }
    <Logo height={logoSize} width={logoSize} color='#FFF'/>
    {text && <SubTitle color='#FFF'>{text}</SubTitle>}
  </Container>
);

LogoComTexto.propTypes = {
  text: PropTypes.string,
  withTitle: PropTypes.bool,
  logoSize: PropTypes.number,
  containerSize: PropTypes.number
};

LogoComTexto.defaultProps= {
  withTitle: false,
  logoSize: 150,
  text: null,
  containerSize: 30
};

export default LogoComTexto;