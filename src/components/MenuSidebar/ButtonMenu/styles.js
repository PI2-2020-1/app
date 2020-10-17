import styled from 'styled-components';
import Colors from '../../../styles/colors';

const Container = styled.div``;
const Button = styled.button`
  background-color: ${Colors.primary};
  color: ${Colors.fontPrimary};
  border: 0;
  display: flex;
  align-items: center;
  /* margin-bottom: 55px; */
  height: 80px;
  &:hover {
    background-color: ${Colors.fontPrimary};
    color: ${Colors.primary};
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
    padding-right: 100px;
    padding-left: 10px;
    /* margin-right: 30px; */
  }
`;

const Title = styled.span`
  border: 0;
  font-size: 20px;
  margin-left: 8px;
`;

export { Container, Button, Title };
