import styled from 'styled-components';
import Colors from '../../../../styles/colors';
import { Link } from 'react-router-dom';

const Text = styled.p`
  font-size: ${props => props.size || 14}px;
  color: ${props => props.color || Colors.fontSecondary};
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  margin-bottom: ${props => props.marginBottom || 0}rem;
  padding-left: ${props => props.paddingLeft || 0}px;
  margin-right: ${props => props.paddingRight|| 0}px;
  line-height: 2rem;
`

const LinkStyled = styled(Link)`
  color: ${Colors.grey_1};
  text-align: ${props => props.textAlign || 'start'};
  margin-right: ${props => props.marginRight|| 0}px;
  margin-bottom: 10px;
  margin-left: 10px;
`;

export {
  Text,
  LinkStyled
}