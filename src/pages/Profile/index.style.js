import styled from "styled-components";
import Colors from '../../styles/colors';
import { Row } from 'react-bootstrap';
import { Link } from "react-router-dom";


const Container = styled.div`
  display: flex;
  background-color: ${Colors.secondary};
  padding: 5rem;
  flex-direction: column;
  min-height: 100%;
`;

const ProfileSection = styled.div`
  background-color: white;
  border-radius: 5rem;
  padding: 2rem 6rem;
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
`

const Text = styled.p`
  font-size: ${props => props.size || 14}px;
  color: ${props => props.color || Colors.fontSecondary};
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  margin-bottom: ${props => props.marginBottom || 0}rem;
  padding-left: ${props => props.paddingLeft || 0}px;
  margin-right: ${props => props.marginRight|| 0}px;
  line-height: 4rem;
  text-align: ${props => props.textAlign || 'start'};
`

const EmployeeSection = styled.div`
`; 

const ContainerRow = styled(Row)`
  width: 100%;
`;

const LinkStyled = styled(Link)`
  color: ${Colors.grey_1};
  text-align: ${props => props.textAlign || 'start'};
  margin-right: ${props => props.marginRight|| 0}px;
  margin-bottom: 10px;
  margin-left: 10px;
`;

const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export { Container, ProfileSection, Text, ContainerRow, EmployeeSection, LinkStyled, ContainerTitle, FlexContainer };