import styled from 'styled-components';
import { Form, Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Colors from '../../styles/colors';
import { Input } from '../../components';

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
  height: ${props => props.height};
`;

const ContainerBootstrap = styled(Container)`
  height: 100%;
`;

const Title = styled.p`
  color: ${props => props.color};
  font-size: ${props => props.size}px;
  font-weight: ${props => props.bold ? "bold" : "light"};
  align-self: ${props => props.center ? "center" : "start"};
  margin-top: ${props => props.marginTop}rem;
  margin-bottom: ${props => props.marginBottom}rem;
`;

const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 0.8;
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

const InputCol = styled(Col)`
  display: flex;
  justify-content: stretch;
`;


export {
  RowContainer,
  ContainerLogin,
  ContainerSide,
  ContainerForm,
  Title,
  FormStyled,
  FormGroupStyled,
  LinkForgotPassword,
  ContainerBootstrap,
  InputCol
}