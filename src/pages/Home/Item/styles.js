import styled from 'styled-components';
import Colors from '../../../styles/colors';

const Container = styled.div`
  background-color: ${Colors.fontPrimary};
  display: flex;
  flex-direction: row;
  /* flex: 1; */
  padding: 20px;
  margin: 10px;
  /* border: 1px solid red; */
  /* border: ${(props) =>
    props.border === true ? '1px solid red' : '0px solid red'}; */
  /* background: ${(props) => (props.primary ? 'palevioletred' : 'white')}; */
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
  padding-top: 30px;
  padding-bottom: 30px;
`;

const Data = styled.span`
  font-size: 25px;
`;

const Description = styled.span`
  margin-top: 3px;
  font-size: 15px;
`;

export { Container, Image, ContainerInfo, Data, Description };
