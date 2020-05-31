import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { required, email } from 'redux-form-validators'

import logo from '../../assets/logo.svg';

const renderField = (props) => {
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

const SignIn = (props) => {

  const { handleSubmit, submitting } = props;
  const onSignIn = ({username, email, password}) => {
    console.log('dados', username, email, password);
  }

  return (
    <>
      <img src={logo} width="200" alt="Agro" />
      <form onSubmit={handleSubmit(onSignIn)}>
        <Field
          name="username"
          type="text"
          component={renderField}
          placeholder="Seu usuário"
          label="Seu usuário"
        />
        <Field 
          name="email" 
          type="email" 
          component={renderField} 
          label="Email"
          validate={[required(), email({ msg: ' Email inválido' })]}
        />
        <Field 
          name="password" 
          type="password" 
          component={renderField} 
          label="Senha" 
        />
        {/* <div> */}
          <button type="submit" disabled={submitting}>
            Acessar
          </button>
        {/* </div> */}
        <Link to="/register">Criar conta</Link>
    </form>
    



      {/* <form>
        <input name="username" type="text" placeholder="Seu usuário" />
        <input name="email" type="email" placeholder="Seu e-mail" />
        <input
          name="password"
          type="password"
          placeholder="Senha"
        />
        <button type="submit"> Acessar</button>
        <Link to="/register">Criar conta</Link>
      </form> */}
    </>
  );
}

export default reduxForm({
  form: 'signIn', // a unique identifier for this form
  // validate, // <--- validation function given to redux-form
  // warn // <--- warning function given to redux-form
})(SignIn)
