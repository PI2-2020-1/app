import styled from 'styled-components';
import { Form, Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Colors from '../../styles/colors';

const ContainerLogin = styled(Col)`
  background-color: ${Colors.secondary};
  display: flex;
  justify-content: center;
`;

const ContainerSide = styled(Col)`
  background-color: ${Colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const RowContainer = styled(Row)`
  height: 100%;
`;

const ContainerBootstrap = styled(Container)`
  height: 100%;
`;

const Title = styled.p`
  color: ${props => props.color};
  font-size: ${props => props.size}px;
  font-weight: ${props => props.bold ? "bold" : "light"};
  align-self: ${props => props.center ? "center" : "start"};
`;

const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0.6;
  width: 50rem;
`;

const LinkForgotPassword = styled(Link)`
  align-self: flex-end;
  margin-bottom: 60px;
  margin-top: 10px;
  color: ${Colors.grey_1}
`; 

const FormStyled = styled.form``;

const FormGroupStyled = styled(Form.Group)``;


export {
  RowContainer,
  ContainerLogin,
  ContainerSide,
  ContainerForm,
  Title,
  FormStyled,
  FormGroupStyled,
  LinkForgotPassword,
  ContainerBootstrap
}