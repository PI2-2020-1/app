import styled from 'styled-components';

const ContainerLogin = styled.div`
  background-color: #F2F2F2;
  display: flex;
  flex: 1;
`;

const ContainerSide = styled.div`
  background-color: #42DC91;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  display:flex;
  height: 100vh;
`;

const Text = styled.p`
  color: ${props => props.color};
  font-size: ${props => props.size}px;
  font-weight: ${props => props.bold ? "bold" : "light"}
`;

export {
  Container,
  ContainerLogin,
  ContainerSide,
  Text
}