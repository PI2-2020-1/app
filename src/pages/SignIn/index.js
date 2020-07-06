import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { required, email } from 'redux-form-validators';
import { signInRequest } from '../../store/modules/auth/actions';
import { Input, Button } from '../../components';
import Logo from './components/LogoText/index';
import {
  ContainerBootstrap, 
  ContainerLogin, 
  ContainerSide, 
  RowContainer, 
  ContainerForm,
  Title,
  LinkForgotPassword 
} from './index.style';
import Colors from '../../styles/colors';

const SignIn = (props) => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const { handleSubmit, submitting } = props;

  const onSignIn = ({username, password}) => {
    console.log('LOGANDO!', username, password)
    dispatch(signInRequest(username, password))
  };

  return (
    <ContainerBootstrap fluid>
      <RowContainer>
        <ContainerSide lg={5}>
          <Logo></Logo>
        </ContainerSide>

        <ContainerLogin lg={7}>
          <ContainerForm onSubmit={() => handleSubmit(onSignIn)}>
            <Title color={Colors.grey_2} size={20} center>ENTRAR</Title>
            <Input name='email' placeholder='E-MAIL' type='email' marginTop={60} marginBottom={30} validate={[required(), email({ msg: ' Email inválido' })]}></Input>
            <Input name='password' placeholder='SENHA' type='password'></Input>
            <LinkForgotPassword to='/'>Esqueci minha senha</LinkForgotPassword>
            
            <Button color='primary' disabled={submitting} padding='18'>
              {loading ? <FaSpinner color='#FFF' size={14} /> : 'ENTRAR'}
            </Button>
            <Link to='/register'>Criar conta</Link>
          </ContainerForm>
        </ContainerLogin>
      </RowContainer>

    </ContainerBootstrap>
  );
}

export default reduxForm({
  form: 'signIn',
})(SignIn)
