import React from 'react';
import { Field } from 'redux-form';
import { InputStyled } from './index.style';
import PropTypes from 'prop-types';

const Input = ({ name, type, placeHolder, ...params }) => (
  <Field
    name={name}
    type={type}
    label={placeHolder}
    component={InputStyled}
    {...params}
  />
);

Field.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
}

Field.defaultProps = {
  placeHolder: '',
}

export default Input;