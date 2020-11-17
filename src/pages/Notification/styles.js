import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Colors from '../../styles/colors';

const Container = styled.div`
  display: flex;
  background-color: ${Colors.secondary};
  padding: 5rem;
  flex-direction: column;
  flex: 1;
  overflow: auto;
`;

export { Container };
