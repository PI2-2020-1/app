import React from 'react';
import { Modal } from 'react-bootstrap';
import { reduxForm } from 'redux-form';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Input } from '../../../../components';
import { ContainerForm, ModalBody, FlexContainer, Text } from './index.style';
import { addEmployeeRequest } from '../../../../store/modules/plantation/actions';


const AddEmployeeModal = ({onHide, show, handleSubmit, submitting}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.profile);

  const onAddClick = ({ cpf }) => {
    dispatch(addEmployeeRequest(cpf, user.username));
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalBody>
        <FlexContainer>
          <Text size={20}>Cadastrar Novo Usuário</Text>
          <ContainerForm>
            <Input name='cpf' placeHolder='CPF' marginTop={20} marginBottom={20} type='text'></Input>
          </ContainerForm>
          <Button position="flex-end" onClick={handleSubmit(onAddClick)} marginTop={20} padding={15} rounded>Adicionar Funcionário</Button>
        </FlexContainer>
      </ModalBody>
    </Modal>
  );
};


export default reduxForm({form: 'addEmployee'})(AddEmployeeModal);