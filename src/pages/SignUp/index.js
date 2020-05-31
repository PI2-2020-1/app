import React from 'react';
import { Link } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { required, email } from 'redux-form-validators'
import FormInput from '../../components/Form/FormInput';
import { signUpRequest } from '../../store/modules/auth/actions'

import logo from '../../assets/logo.svg';

const SignUp = (props) => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const { handleSubmit, submitting } = props;
  const onSignUp = ({username, email, password1, password2}) => {
    dispatch(signUpRequest(username, email, password1, password2))
  }

  return (
    <>
      <img src={logo} width="200" alt="Agro" />
      <form onSubmit={handleSubmit(onSignUp)}>
        <Field
          name="username"
          type="text"
          component={FormInput}
          placeholder="Seu usuário"
          label="Seu usuário"
        />
        <Field 
          name="email" 
          type="email" 
          component={FormInput} 
          label="Email"
          validate={[required(), email({ msg: ' Email inválido' })]}
        />
        <Field 
          name="password1" 
          type="password" 
          component={FormInput} 
          label="Senha" 
        />
        <Field 
          name="password2" 
          type="password" 
          component={FormInput} 
          label="Confirmar Senha" 
        />
        <button type="submit" disabled={submitting}>
          {loading ? <FaSpinner color="#FFF" size={14} /> : 'Criar conta'}
        </button>
        <Link to="/">Já tenho login</Link>
    </form>
    
    </>
  );
}

export default reduxForm({
  form: 'signUp', 
})(SignUp)
