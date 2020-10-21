import styled from 'styled-components';
import { darken } from 'polished';
import Colors from '../../../styles/colors';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
`;

const Select = styled.select`
  width: 20%;
  height: 40px;
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 20px;

  color: ${darken(0.2, Colors.primary)};
  padding-left: 5px;
  border: 0;
  background: ${Colors.fontPrimary};
  border-radius: 4px;
`;

export { Container, Select };
