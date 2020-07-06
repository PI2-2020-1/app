import React from 'react';
import { Field } from 'redux-form';
import { InputStyled } from './index.style';
import PropTypes from 'prop-types';

const Input = ({name, type, placeHolder, width, ...params}) => (
  <Field
    name={name}
    type={type}
    component={InputStyled}
    placeholder={placeHolder}
    width={width}
    {...params}
  />
);

Field.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  width: PropTypes.number,
}

Field.defaultProps = {
  type: 'text'
}

export default Input;