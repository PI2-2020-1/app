import React from 'react';


const FormInput = (props) => {
  const {
    input,
    label,
    type,
    meta: { touched, error },
    ...other
  } = props;
 
  return (
    <div>
      <input 
        {...input} 
        placeholder={label} 
        type={type} 
        {...other}
      />
      {touched && error && <span>{error}</span>}
    </div>
  )
}

export default FormInput;