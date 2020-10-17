import React from 'react';
import LogOut from '../LogOut';
import Logo from '../Logo'
import LogoText from '../LogoText'
import Colors from '../../styles/colors'
import { Container, WrapperLogo } from './styles';


function MenuSidebar() {
  return (
    <Container>
      <WrapperLogo>
        <Logo width={65} height={65} color='#ff0000'/>
        {/* <LogoText width={65} height={65} color='#ff0000'/> */}
        <h1>A2P2</h1>
      </WrapperLogo>
      
      <LogOut/>
    </Container>
  );
}

export default MenuSidebar;