import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import Colors from '../../styles/colors';

const InputStyled = styled(Form.Control)`
  border-radius: 20px;
  color: ${Colors.grey_1};
  margin-bottom: 10px;
  font-size: 15px;
  width: ${(props) => props.width};

  padding: ${(props) => props.padding || 20}px;
  padding-top: ${(props) => props.paddingTop}px;
  padding-right: ${(props) => props.paddingRight}px;
  padding-bottom: ${(props) => props.paddingBottom}px;
  padding-left: ${(props) => props.paddingLeft}px;

  margin: ${(props) => props.margin}px;
  margin-top: ${(props) => props.marginTop}px;
  margin-right: ${(props) => props.marginRight}px;
  margin-bottom: ${(props) => props.marginBottom}px;
  margin-left: ${(props) => props.marginLeft}px;

  ${(props) =>
    props.bordered
      ? `
      border-width: 1px; 
      border-color: ${Colors.grey_3};
      border-style: double;
    `
      : `border-width: 0;`};

  ::placeholder {
    color: ${Colors.grey_3};
  }
`;

export { InputStyled };
