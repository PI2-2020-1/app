import React from 'react';

import { Container, Image, ContainerInfo, Data, Description } from './styles';
// import logo from '../../assets/logo.svg';
import sun from '../../../assets/sun.svg';

function Item() {
  return (
    <Container>
      <Image src={sun} />
      <ContainerInfo>
        <Data>35 C</Data>
        <Description>Temperatura</Description>
      </ContainerInfo>
    </Container>
  );
}

export default Item;
