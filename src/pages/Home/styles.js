import styled from 'styled-components';
import Colors from '../../styles/colors';

const Container = styled.div`
  background-color: ${Colors.secondary};
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-right: 60px;
`;

const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  list-style: none;
  padding-left: 30px;
`;

const Header = styled.div`
  padding: 40px;
`;

const Title = styled.h1`
  font-size: 25px;
`;

export { Container, Header, Title, ItemsGrid };
