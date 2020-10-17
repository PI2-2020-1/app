import React from 'react';
import { Modal } from 'react-bootstrap';
import { reduxForm } from 'redux-form';
import { Button, Input } from '../../../../components';
import { ContainerForm, ModalBody, FlexContainer, Text } from './index.style';

const AddEmployeeModal = ({onHide, show}) => {

  const handleChangeCpf = () => {};

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
            <Input name='cpf' on placeHolder='CPF' marginTop={20} marginBottom={20} type='text' onChange={handleChangeCpf}></Input>
          </ContainerForm>
          <Button position="flex-end" onClick={onHide} marginTop={20} padding={15} rounded>Adicionar Funcionário</Button>
        </FlexContainer>
      </ModalBody>
    </Modal>
  );
};


export default reduxForm({form: 'addEmployee'})(AddEmployeeModal);