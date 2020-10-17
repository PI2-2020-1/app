import React, { useEffect, useState } from 'react';
import { Col, Spinner } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../../styles/colors';
import {
  Container,
  ProfileSection,
  Text,
  ContainerRow,
  EmployeeSection,
  ContainerTitle,
} from './index.style';
import Table from './components/Table';
import AddEmployeeModal from './components/AddEmployeeModal';
import { Button } from '../../components';
import { getEmployees } from '../../store/modules/plantation/actions';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.profile);
  const loading = useSelector((state) => state.user.loading);
  const employees = useSelector((state) => state.plantation.employees);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    dispatch(getEmployees(user.username));
  }, []);

  return (
    <Container>
      <ContainerTitle>
        <Text size={25}> Perfil </Text>
        <Button
          paddingHorizontal={20}
          paddingTop={10}
          paddingBottom={10}
          rounded
        >
          Editar
        </Button>
      </ContainerTitle>
      <ProfileSection>
        <ContainerRow>
          <Col lg={1}>
            <Text paddingRight={30}>Nome</Text>
            <Text paddingRight={30}>CPF</Text>
            <Text paddingRight={30}>Username</Text>
          </Col>
          <Col lg={5}>
            <Text color={Colors.grey_4}>{user.full_name || '-'}</Text>
            <Text color={Colors.grey_4}>{user.cpf || '-'}</Text>
            <Text color={Colors.grey_4}>{user.username}</Text>
          </Col>
          <Col>
            <Text paddingRight={30}>E-mail</Text>
            <Text paddingRight={30}>Campo</Text>
            <Text paddingRight={30}>Usuário do Telegram</Text>
          </Col>
          <Col>
            <Text color={Colors.grey_4}>{user.email}</Text>
            <Text color={Colors.grey_4}>{user.camp || '-'}</Text>
            <Text color={Colors.grey_4}>{user.telegram || '-'}</Text>
          </Col>
        </ContainerRow>
      </ProfileSection>

      <ContainerTitle>
        <Text size={25}>Funcionários</Text>
        <Button
          onClick={() => setModalShow(true)}
          paddingHorizontal={20}
          paddingTop={10}
          paddingBottom={10}
          rounded
        >
          Adicionar
        </Button>
      </ContainerTitle>
      {loading ? (
        <Spinner animation="border" variant="success" />
      ) : (
        // remover essa verificação e verificar se é admin
        employees && (
          <EmployeeSection>
            <Table users={employees} />
          </EmployeeSection>
        )
      )}

      <AddEmployeeModal show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
};

export default Profile;
