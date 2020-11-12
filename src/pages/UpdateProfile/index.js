import React, { useEffect, useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { reduxForm, change, initialize } from 'redux-form';
import { required, email as emailType } from 'redux-form-validators';
import { Input, Button } from '../../components';
import Colors from '../../styles/colors';
import history from '../../services/history';
import { updateUser } from '../../store/modules/user/actions';

import {
  ContainerBootstrap,
  Title,
  Content,
  Label,
  ButtonsContainer,
} from './index.style';

// eslint-disable-next-line react/prop-types
const EditProfile = ({ handleSubmit, submitting }) => {
  const user = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(change('editProfile', 'cpf', user.cpf));
    dispatch(change('editProfile', 'username', user.username));
    dispatch(change('editProfile', 'name', user.full_name));
    dispatch(change('editProfile', 'email', user.email));
    dispatch(change('editProfile', 'camp', user.camp));
    dispatch(change('editProfile', 'telegram', user.telegram));
  }, [dispatch, user.cpf]);

  const onSubmit = (props) => {
    console.log(props);
    // eslint-disable-next-line react/prop-types
    const { username, cpf, name, telegram, email, camp } = props;

    console.log('ATUALIZANDO USUÁRIO!');
    dispatch(updateUser({ username, cpf, name, telegram, email, camp }));
  };

  return (
    <ContainerBootstrap fluid>
      <Title size="24" margin_bottom={3}>
        Editar Perfil
      </Title>
      <Content>
        <Input
          name="username"
          type="text"
          marginBottom={35}
          padding={20}
          disabled
          placeHolder="NOME DE USUÁRIO"
        />
        <Input
          name="cpf"
          type="text"
          marginBottomInfo={35}
          padding={20}
          disabled
          placeHolder="CPF"
          info="O nome de usuário e CPF não podem ser alterados. Em caso de informações erradas, entre em contato com o administrado do sistema."
        />
        <Input
          name="name"
          placeHolder="NOME COMPLETO"
          type="text"
          marginBottom={35}
          padding={20}
          validate={[required()]}
        />
        <Input
          name="telegram"
          placeHolder="USUÁRIO DO TELEGRAM"
          type="text"
          marginBottom={35}
          padding={20}
          validate={[required()]}
        />
        <Input
          name="email"
          placeHolder="E-MAIL"
          type="text"
          marginBottom={35}
          padding={20}
          validate={[required(), emailType({ msg: ' Email inválido' })]}
        />
        <Input
          name="camp"
          placeHolder="NOME DA PLANTAÇÃO"
          type="text"
          marginBottom={35}
          padding={20}
          validate={[required()]}
        />
        <ButtonsContainer>
          <Button
            color={Colors.error_color}
            paddingVertical="15"
            paddingHorizontal="30"
            position="flex-end"
            marginTop={70}
            rounded
            onClick={() => history.go(-1)}
            disabled={submitting}
          >
            CANCELAR
          </Button>
          <Button
            color="primary"
            paddingVertical="15"
            paddingHorizontal="30"
            position="flex-end"
            marginTop={70}
            rounded
            onClick={handleSubmit(onSubmit)}
          >
            SALVAR
          </Button>
        </ButtonsContainer>
      </Content>
    </ContainerBootstrap>
  );
};

export default reduxForm({
  form: 'editProfile',
})(EditProfile);

// export default connect((state) => ({
//   initialValues: {
//     name: state.user.name,
//     email: state.user.email,
//     cpf: state.user.cpf,
//     telegram: state.user.telegram,
//     camp: state.user.camp,
//   },
//   enableReinitialize: true,
// }))(EditProfile);
