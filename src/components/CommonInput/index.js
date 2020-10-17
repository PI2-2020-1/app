import React from 'react';
import { InputStyled } from './index.style';
import PropTypes from 'prop-types';

const Input = ({name, type, placeHolder, ...params}) => (
  <InputStyled
    name={name}
    type={type}
    placeholder={placeHolder}
    {...params}
  />
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
}

Input.defaultProps = {
  placeHolder: '',
}

export default Input;