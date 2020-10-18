import styled from 'styled-components';
import Colors from '../../../styles/colors';

const Container = styled.div`
  background-color: ${Colors.fontPrimary};
  display: flex;
  flex-direction: row;
  /* flex: 1; */
  padding: 20px;
  margin: 10px;
`;

const Image = styled.img`
  /* margin: 25px; */
`;

const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  margin-left: 25px;
`;

const Data = styled.span`
  font-size: 25px;
`;

const Description = styled.span`
  font-size: 15px;
`;

export { Container, Image, ContainerInfo, Data, Description };
