import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { required, email } from 'redux-form-validators';
import { signInRequest } from '../../store/modules/auth/actions';
import { Input, Button, LogoText } from '../../components';

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

const SignIn = ({ handleSubmit, submitting }) => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const onSignIn = (props) => {
    console.log(props);
    const {username, password} = props;
    console.log('LOGANDO!', username, password)
    dispatch(signInRequest(username, password))
  };

  return (
    <ContainerBootstrap fluid>
      <RowContainer height="100%">
        <ContainerSide lg={5}>
          <LogoText/>
        </ContainerSide>

        <ContainerLogin lg={7}>
          <ContainerForm>
            <Title color={Colors.grey_2} size={20} center>ENTRAR</Title>
            <Input name='username' placeHolder='USERNAME' type='text' marginTop={60} marginBottom={35} padding={25}/>
            <Input name='password' placeHolder='SENHA' type='password' padding={25}/>
            <LinkForgotPassword to='/'>Esqueci minha senha</LinkForgotPassword>

            <Button 
              color='primary' 
              disabled={submitting} 
              paddingVertical='20' 
              paddingHorizontal='35' 
              type="submit" 
              onClick={handleSubmit(onSignIn)}
            >
              {loading ? <FaSpinner color='#FFF' size={14} /> : 'ENTRAR'}
            </Button>
            <Link to='/verification'>Criar conta</Link>
          </ContainerForm>
        </ContainerLogin>
      </RowContainer>

    </ContainerBootstrap>
  );
}

export default reduxForm({form: 'signIn'})(SignIn)
