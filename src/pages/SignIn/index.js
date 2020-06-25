import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '../../store/modules/auth/actions';
import { Field, reduxForm } from 'redux-form';
import { ContainerLogin, ContainerSide, Container, Text, Titulo, SubTitulo } from './index.style';
import Logo from './components/LogoTexto/index';
// import { Link } from 'react-router-dom';
// import { FaSpinner } from 'react-icons/fa';
// import { required, email } from 'redux-form-validators'
// import FormInput from '../../components/Form/FormInput';

const SignIn = (props) => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const { handleSubmit, submitting } = props;
  const onSignIn = ({username, password}) => {
    console.log('LOGANDO!', username, password)
    dispatch(signInRequest(username, password))
  };

  return (
    <Container>
      <ContainerSide>
        <Logo></Logo>
      </ContainerSide>

      <ContainerLogin>
      </ContainerLogin>
    </Container>
    // <>
    //   <img src={logo} width="200" alt="Agro" />
    //   <form onSubmit={handleSubmit(onSignIn)}>
    //     <Field
    //       name="username"
    //       type="text"
    //       component={FormInput}
    //       placeholder="Seu usuário"
    //       label="Seu usuário"
    //     />
    //     {/* <Field
    //       name="email"
    //       type="email"
    //       component={FormInput}
    //       label="Email"
    //       validate={[required(), email({ msg: ' Email inválido' })]}
    //     /> */}
    //     <Field
    //       name="password"
    //       type="password"
    //       component={FormInput}
    //       label="Senha"
    //     />
    //     <button type="submit" disabled={submitting}>
    //       {loading ? <FaSpinner color="#FFF" size={14} /> : 'Acessar'}
    //     </button>
    //     <Link to="/register">Criar conta</Link>
    // </form>

    // </>
  );
}

export default reduxForm({
  form: 'signIn',
})(SignIn)
