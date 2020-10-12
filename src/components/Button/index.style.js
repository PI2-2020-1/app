import styled from 'styled-components';
import Colors from '../../styles/colors';

const SubmitButton = styled.button`

  border-width: 0;
  font-weight: 500;
  font-size: 17px;

  border-radius: ${props => props.rounded ? '25px' : '0'};

  background-color: ${props => props.color === 'primary' ?
    Colors.primary : ( props.color === 'secondary' ?
      Colors.secondary :
      props.color
    )
  };

  color: ${props => props.color === 'primary' ?
    Colors.fontPrimary : ( props.color === 'secondary' ?
      Colors.fontSecondary :
      props.fontColor
    )
  };

  padding: ${props => props.padding}px;
  padding-top: ${props => props.paddingTop || props.paddingVertical }px;
  padding-right: ${props => props.paddingRight || props.paddingHorizontal }px;
  padding-bottom: ${props => props.paddingBottom || props.paddingVertical }px;
  padding-left: ${props => props.paddingLeft || props.paddingHorizontal }px;

  margin: ${props => props.margin}px;
  margin-top: ${props => props.marginTop}px;
  margin-right: ${props => props.marginRight}px;
  margin-bottom: ${props => props.marginBottom}px;
  margin-left: ${props => props.marginLeft}px;

  align-self: ${props => props.position};
`;

export { SubmitButton };