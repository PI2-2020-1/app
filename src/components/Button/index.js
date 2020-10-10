import React from 'react';
import { SubmitButton } from './index.style'
import PropTypes from 'prop-types';
import Colors from '../../styles/colors';

const Button = ({color, fontColor, rounded, type, ...props}) => <SubmitButton color={color} fontColor={fontColor} rounded={rounded} type={type} {...props}/>;

Button.propTypes = {
  color: PropTypes.string,
  fontColor: PropTypes.string,
  rounded: PropTypes.bool,
  type: PropTypes.string
};

Button.defaultProps = {
  color: Colors.primary,
  fontColor: Colors.fontPrimary,
  rounded: true,
  type: 'button'
}


export default Button;