import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import { InputStyled, Span } from './index.style';

const Input = ({
  name,
  type,
  placeHolder,
  disabled,
  info,
  marginBottomInfo,
  marginBottom,
  ...params
}) => (
  <>
    <Field
      name={name}
      type={type}
      label={placeHolder}
      component={InputStyled}
      disabled={disabled}
      marginBottom={marginBottom}
      {...params}
    />
    {info && <Span marginBottomInfo={marginBottomInfo}>{info}</Span>}
  </>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  disabled: PropTypes.bool,
  info: PropTypes.string,
  marginBottomInfo: PropTypes.number,
  marginBottom: PropTypes.number,
};

Input.defaultProps = {
  placeHolder: '',
  disabled: false,
  info: '',
  marginBottomInfo: null,
  marginBottom: null,
};

export default Input;
