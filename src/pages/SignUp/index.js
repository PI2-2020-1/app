import React from 'react';
import { Link } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { reduxForm } from 'redux-form'
import { signUpRequest } from '../../store/modules/auth/actions'
import { Input, Button } from '../../components';
import { LogoText } from '../../components'
import Colors from '../../styles/colors';
import { required, email } from 'redux-form-validators'

import {
  ContainerBootstrap,
  ContainerLogin,
  ContainerSide,
  RowContainer,
  ContainerForm,
  Title,
  InputCol
} from './index.style';

const SignUp = (props) => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const { handleSubmit, submitting } = props;
  const onSignUp = ({username, email, password, passwordConfirm}) => {
    dispatch(signUpRequest(username, email, password, passwordConfirm))
  }

  return (
    <ContainerBootstrap fluid>
      <RowContainer height="100%">
        <ContainerSide lg={5}>
          <LogoText/>
        </ContainerSide>

        <ContainerLogin lg={7}>
          <ContainerForm>
            <Title color={Colors.grey_2} size={20}>DADOS PESSOAIS</Title>
            <Input name='name' placeHolder='NOME COMPLETO' type='text' marginBottom={35} padding={25}/>
            <Input name='telegram' placeHolder='USUÁRIO DO TELEGRAM' type='text' marginBottom={35} padding={25}/>
            <Input name='email' placeHolder='E-MAIL' type='e-mail' marginBottom={35} padding={25} validate={[required(), email({ msg: ' Email inválido' })]}/>
            <Input name='username' placeHolder='USERNAME' type='text' marginBottom={35} padding={25}/>
            <RowContainer>
              <InputCol lg={6}> 
                <Input name='password' placeHolder='SENHA' type='password' width="100%" padding={25}/>
              </InputCol>
              <InputCol lg={6}>
                <Input name='passwordConfirm' placeHolder='CONFIRMAÇÃO DE SENHA' type='password' width="100%" padding={25}/>
              </InputCol>
            </RowContainer>
            <Button 
              color='primary' 
              disabled={submitting} 
              paddingVertical='20' 
              paddingHorizontal='35' 
              onClick={handleSubmit(onSignUp)} 
              position='flex-end'
              marginTop={70}
            >
              {loading ? <FaSpinner color='#FFF' size={14} /> : 'Continuar'}
            </Button>
            <Link to="/">Já tenho login</Link>
          </ContainerForm>
        </ContainerLogin>
      </RowContainer>

    </ContainerBootstrap>
  );
};

export default reduxForm({
  form: 'signUp', 
})(SignUp)
