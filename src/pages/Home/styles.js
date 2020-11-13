import styled from 'styled-components';
import Colors from '../../styles/colors';
import { darken } from 'polished';

const Container = styled.div`
  background-color: ${Colors.secondary};
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
  padding-right: 60px;
`;

const ContainerSelect = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 30px;
  justify-content: flex-end;
`;

const Select = styled.select`
  width: 20%;
  height: 40px;
  /* margin-top: 15px; */
  margin-bottom: 15px;
  font-size: 20px;

  color: ${darken(0.2, Colors.primary)};
  padding-left: 5px;
  border: 0;
  background: ${Colors.fontPrimary};
  border-radius: 4px;
`;

const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  list-style: none;
  padding-left: 30px;
`;

const Header = styled.div`
  padding-top: 40px;
  padding-left: 40px;
`;

const Title = styled.h1`
  font-size: 25px;
`;

export { Container, Header, Title, ItemsGrid, ContainerSelect, Select };
