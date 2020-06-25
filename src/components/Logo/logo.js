import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from '../../assets/logo.svg';

const Imagem = styled.img`
  margin: 25px;
`;

const Logo = ({width, height, color}) => (
  <Imagem src={logo} height={height} width={width} color={color} >
  </Imagem>
);

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string
};

Logo.defaultProps = {
  width: 18,
  height: 18,
  color: "#fff"
}

export default Logo;