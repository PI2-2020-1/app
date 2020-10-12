import React from 'react';
import { Link } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { reduxForm } from 'redux-form'
import { signUpVerificationRequest } from '../../store/modules/auth/actions'
import { Input, Button } from '../../components';
import { LogoText } from '../../components'
import Colors from '../../styles/colors';

import {
  ContainerBootstrap,
  ContainerLogin,
  ContainerSide,
  RowContainer,
  ContainerForm,
  Title,
  InputCol
} from './index.style';

const SignUpVerification = (props) => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const { handleSubmit, submitting } = props;
  const onSignUpVerification = ({cpf}) => {
    dispatch(signUpVerificationRequest(cpf))
  }

  return (
    <ContainerBootstrap fluid>
      <RowContainer height="100%">
        <ContainerSide lg={5}>
          <LogoText/>
        </ContainerSide>

        <ContainerLogin lg={7}>
          <ContainerForm>
            <Title color={Colors.grey_2} size={20}>VERIFICAR CPF</Title>
            <Input name='cpf' placeHolder='CPF' type='text' marginBottom={35} padding={25}/>
            <Button 
              color='primary' 
              disabled={submitting} 
              paddingVertical='20' 
              paddingHorizontal='35' 
              onClick={handleSubmit(onSignUpVerification)} 
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
  form: 'signUpVerification', 
})(SignUpVerification)
