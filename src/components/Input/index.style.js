import styled from 'styled-components';
import Colors from '../../styles/colors';
import FormInput from '../Form';

const InputStyled = styled(FormInput)`
  border-radius: 20px;
  border-width: 0;
  color: ${Colors.grey_1};
  padding: 20px;
  margin-bottom: 10px;
  font-size: 15px;
  width: ${(props) => props.width};

  padding: ${(props) => props.padding && `${props.padding}px`};
  padding-top: ${(props) => props.paddingTop && `${props.paddingTop}px`};
  padding-right: ${(props) => props.paddingRight && `${props.paddingRight}px`};
  padding-bottom: ${(props) =>
    props.paddingBottom && `${props.paddingBottom}px`};
  padding-left: ${(props) => props.paddingLeft && `${props.paddingLeft}px`};

  margin: ${(props) => props.margin && `${props.margin}px`};
  margin-top: ${(props) => props.marginTop && `${props.marginTop}px`};
  margin-right: ${(props) => props.marginRight && `${props.marginRight}px`};
  margin-bottom: ${(props) => props.marginBottom && `${props.marginBottom}px`};
  margin-left: ${(props) => props.marginLeft && `${props.marginLeft}px`};

  ::placeholder {
    color: ${Colors.grey_3};
  }

  :disabled {
    background-color: ${Colors.grey_5};
    color: ${Colors.grey_2};
  }
`;

const Span = styled.span`
  color: ${Colors.grey_1};
  font-size: 12px;
  margin-bottom: ${(props) =>
    props.marginBottomInfo && `${props.marginBottomInfo}px`};
  line-height: 20px;
`;

export { InputStyled, Span };
