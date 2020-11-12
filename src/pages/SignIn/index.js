import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { reduxForm } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '../../store/modules/auth/actions';
import { Input, Button, LogoText } from '../../components';

import {
  ContainerBootstrap,
  ContainerLogin,
  ContainerSide,
  RowContainer,
  ContainerForm,
  Title,
  GreyLink,
  LinksContainer,
} from './index.style';
import Colors from '../../styles/colors';

const SignIn = ({ handleSubmit, submitting }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const onSignIn = (props) => {
    const { username, password } = props;
    console.log('LOGANDO!', username, password);
    dispatch(signInRequest(username, password));
  };

  return (
    <ContainerBootstrap fluid>
      <RowContainer height="100%">
        <ContainerSide lg={5}>
          <LogoText
            text="ANALISADOR DE AMBIENTE PARA PLANTAÇÕES"
            containerSize={25}
            withTitle
          />
        </ContainerSide>

        <ContainerLogin lg={7}>
          <ContainerForm>
            <Title color={Colors.grey_2} size={20} center>
              ENTRAR
            </Title>
            <Input
              name="username"
              placeHolder="USERNAME"
              type="text"
              marginTop={60}
              marginBottom={35}
              padding={25}
            />
            <Input
              name="password"
              placeHolder="SENHA"
              type="password"
              padding={25}
            />
            <LinksContainer>
              <GreyLink to="/">Esqueci minha senha</GreyLink>
              <GreyLink to="/verification">Primeiro acesso?</GreyLink>
            </LinksContainer>
            <Button
              color="primary"
              disabled={submitting}
              paddingVertical="20"
              paddingHorizontal="35"
              type="submit"
              onClick={handleSubmit(onSignIn)}
              rounded
            >
              {loading ? <FaSpinner color="#FFF" size={14} /> : 'ENTRAR'}
            </Button>
          </ContainerForm>
        </ContainerLogin>
      </RowContainer>
    </ContainerBootstrap>
  );
};

export default reduxForm({ form: 'signIn' })(SignIn);
