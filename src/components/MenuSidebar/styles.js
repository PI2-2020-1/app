import styled from 'styled-components';
import Colors from '../../styles/colors';

const Container = styled.div`
  height: 100%;
  /* height: 100px; */
  width: 256px;
  /* margin-left: 200px; */
  background:  ${Colors.primary};
`
const WrapperLogo = styled.div`
  margin: 46px 36px 46px 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 182px;
  height: 182px;
  flex-direction: column;
  /* padding: 10px;
  padding-left: 10px; */
  /* background: '#FFF'; */
  background:  ${Colors.secondary};
  border-radius: 100%;
`
export {
  Container,
  WrapperLogo
}