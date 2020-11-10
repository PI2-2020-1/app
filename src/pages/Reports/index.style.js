/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import { Form, Col, Container } from 'react-bootstrap';
import Colors from '../../styles/colors';

const ContainerBootstrap = styled(Container)`
  display: flex;
  background-color: ${Colors.secondary};
  padding: 50px;
  flex-direction: column;
  flex: 1;
  overflow: auto;
`;

const Title = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => (props.bold ? 'bold' : 'light')};
  align-self: ${(props) => (props.center ? 'center' : 'start')};
  margin-top: ${(props) => props.marginTop}rem;
  margin-bottom: ${(props) => props.marginBottom}rem;
`;

const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  width: 50%;
`;

const FormStyled = styled.form``;

const FormGroupCheckbox = styled(Form.Group)`
  border-width: 2px;
  border-style: solid;
  border-color: white;
  border-radius: 5px;
  padding: 10px 20px;
  background-color: white;
  margin-bottom: 35px;
  margin-top: 10px;
`;

const InputCol = styled(Col)`
  display: flex;
  justify-content: stretch;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-right: 20%;
  padding-left: 20%;
  margin-top: 10px;
`;

const MultipleSelect = styled(Form.Check)`
  font-weight: 500;
  color: ${Colors.grey_1};
  font-size: 15px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const Label = styled(Form.Label)`
  font-weight: 500;
  color: ${Colors.grey_2};
  font-size: 15px;
  margin-bottom: 15px;
`;

export {
  ContainerForm,
  Title,
  FormStyled,
  ContainerBootstrap,
  InputCol,
  Content,
  MultipleSelect,
  Label,
  FormGroupCheckbox,
};
