import styled from 'styled-components';
import Colors from '../../styles/colors';

const Container = styled.div`
  height: 100%;
  /* height: 100px; */
  width: 200px;
  /* margin-left: 200px; */
  background: ${Colors.primary};
  display: flex;
  flex-direction: column;
`;
const WrapperLogo = styled.div`
  /* margin: 46px 36px 46px 38px; */
  margin-top: 30px;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  width: 140px;
  height: 140px;
  flex-direction: column;
  background: ${Colors.secondary};
  border-radius: 100%;
`;

const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const FarmOf = styled.span`
  color: ${Colors.fontPrimary};
  margin-bottom: 10px;
`;

const FarmOwner = styled.span`
  color: ${Colors.fontPrimary};
  font-weight: bold;
  font-size: 20px;
`;

const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-left: 20px;
`;

export {
  Container,
  WrapperLogo,
  ContainerInfo,
  FarmOf,
  FarmOwner,
  ContainerMenu,
};
