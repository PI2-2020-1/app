import styled from 'styled-components';
import Colors from '../../styles/colors';

const Button = styled.button`
  background-color: ${Colors.primary};
  color: ${Colors.fontPrimary};
  border: 0;
  display: flex;
  align-items: center;
  height: 80px;
  margin-left: 20px;
  &:hover {
    background-color: ${Colors.fontPrimary};
    color: ${Colors.primary};
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
    padding-right: 100px;
    padding-left: 10px;
  }
`;

const Text = styled.span`
  border: 0;
  font-size: 18px;
  margin-left: 15px;
`;

export { Button, Text };
