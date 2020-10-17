import React from 'react';
import { SubmitButton, ButtonContainer } from './index.style'
import PropTypes from 'prop-types';
import Colors from '../../styles/colors';

const Button = ({color, fontColor, rounded, type, position, ...props}) => (
  <SubmitButton color={color} fontColor={fontColor} rounded={rounded} type={type} position={position} {...props}/>
);

Button.propTypes = {
  color: PropTypes.string,
  fontColor: PropTypes.string,
  rounded: PropTypes.bool,
  type: PropTypes.string,
  position: PropTypes.oneOf(['center', 'flex-end', 'flex-start']),
};

Button.defaultProps = {
  color: Colors.primary,
  fontColor: Colors.fontPrimary,
  rounded: false,
  type: 'button',
  position: '',
}

export default Button;