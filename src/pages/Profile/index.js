import React, { useEffect } from 'react';
import { Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import EditIcon from '@material-ui/icons/Edit'
import Colors from '../../styles/colors';
import { Container, ProfileSection, Text, ContainerRow, EmployeeSection, LinkStyled } from './index.style'
import Table from './components/Table';


const Profile = () => {
  const user = useSelector(state => state.user.profile);
  const employees = [
    { name: 'usuario 1', email:'usuario1@gmail.com', username:'usuarios123' },
    { name: 'usuario 2', email:'usuario2@gmail.com', username:'usuarios223' },
    { name: 'usuario 3', email:'usuario3@gmail.com', username:'usuarios323' }
  ];

  useEffect(() => {
    console.log(employees);
  });

  return (
    <Container>
      <Text size={30} marginBottom={3}>
        Perfil
        <LinkStyled to='/'><EditIcon/></LinkStyled>
      </Text>
      <ProfileSection>
        <ContainerRow>
          <Col lg={1}>
            <Text paddingRight={30}>Nome</Text>
            <Text paddingRight={30}>CPF</Text>
            <Text paddingRight={30}>Username</Text>
          </Col>
          <Col lg={5}>
            <Text color={Colors.grey_4}>{`${user.firstName} ${user.lastName}`}</Text>
            <Text color={Colors.grey_4}>{user.cpf || 'Não fornecido'}</Text>
            <Text color={Colors.grey_4}>{user.username}</Text>
          </Col>
          <Col>
            <Text paddingRight={30}>E-mail</Text>
            <Text paddingRight={30}>Campo</Text>
            <Text paddingRight={30}>Usuário do Telegram</Text>
          </Col>
          <Col>
            <Text color={Colors.grey_4}>{user.email}</Text>
            <Text color={Colors.grey_4}>{user.camp || 'Não Fornecido'}</Text>
            <Text color={Colors.grey_4}>{user.telegram || 'Não Fornecido'}</Text>
          </Col>
        </ContainerRow>
      </ProfileSection>

      <Text size={30} marginBottom={3}>Funcionários</Text>
      <EmployeeSection>
        <Table users={employees}></Table>
      </EmployeeSection>
    </Container>
  );

}

export default Profile;
