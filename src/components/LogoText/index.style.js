import styled from 'styled-components';

const Title = styled.p`
  color: #FFF;
  font-size: 40px;
  font-weight: 500;
  text-align: center;
`;

const SubTitle = styled.p`
  color: #FFF;
  font-size: 28px;
  font-weight: 100;
  margin-top: 7px;
  text-align: center;
  line-height: 1.8;
`;

const Container = styled.div`
  max-width: ${props => props.containerSize + 'rem' || 'auto'};
  display: flex;
  align-items: center;
  flex-direction: column;
`

export {
  Title,
  SubTitle,
  Container
}