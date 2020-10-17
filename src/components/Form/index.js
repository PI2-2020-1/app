import React from 'react';


const FormInput = (props) => {
  const {
    input,
    label,
    type,
    meta: { touched, error },
    ...other
  } = props;

  return <>
    <input
      {...input}
      {...other}
      placeholder={label}
      type={type}
    />
    {touched && error && <span>{error}</span>}
  </>
}

export default FormInput;