import React from 'react';
import { SubmitButton } from './index.style'
import PropTypes from 'prop-types';
import Colors from '../../styles/colors';

const Button = ({color, fontColor, rounded,...props}) => (
  <SubmitButton color={color} fontColor={fontColor} rounded={rounded} {...props}>
  </SubmitButton>
);

Button.propTypes = {
  color: PropTypes.string,
  fontColor: PropTypes.string,
  rounded: PropTypes.bool
};

Button.defaultProps = {
  color: Colors.primary,
  fontColor: Colors.fontPrimary,
  rounded: true
}


export default Button;