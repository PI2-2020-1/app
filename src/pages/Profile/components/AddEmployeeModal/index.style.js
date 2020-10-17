import styled from "styled-components";
import Colors from '../../../../styles/colors';
import { Modal } from 'react-bootstrap';

const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalBody = styled(Modal.Body)`
  background-color: ${Colors.secondary};
  padding: 3rem;
`;

const Text = styled.p`
  font-size: ${props => props.size || 14}px;
  color: ${props => props.color || Colors.fontSecondary};
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  margin-bottom: ${props => props.marginBottom || 0}rem;
  padding-left: ${props => props.paddingLeft || 0}px;
  margin-right: ${props => props.marginRight|| 0}px;
  margin-left: ${props => props.marginLeft|| 0}px;
  line-height: 4rem;
  text-align: ${props => props.textAlign || 'start'};
`

const HeaderModal = styled(Modal.Header)`
  background-color: ${Colors.grey_2};
`;

export {
  ContainerForm,
  FlexContainer,
  ModalBody,
  Text,
  HeaderModal
};
