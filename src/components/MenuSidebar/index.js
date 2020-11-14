import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogOut from '../LogOut';
import greenLogo from '../../assets/greenLogo.svg';
import A2P2 from '../../assets/A2P2.svg';
import ButtonMenu from './ButtonMenu';
import { SidebarData } from './SidebarData';
import {
  Container,
  WrapperLogo,
  ContainerInfo,
  FarmOf,
  FarmOwner,
  ContainerMenu,
  Logo,
  LogoText,
} from './styles';

function MenuSidebar() {
  const { username } = useSelector((state) => state.user.profile);
  // const user = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.station);

  return (
    <Container>
      <WrapperLogo>
        <Logo src={greenLogo} />
        <LogoText src={A2P2} />
      </WrapperLogo>

      <ContainerInfo>
        <FarmOf>Fazenda de</FarmOf>
        <FarmOwner>{user ? user.full_name.split(' ', 1) : username}</FarmOwner>
      </ContainerInfo>

      <ContainerMenu>
        {SidebarData.map((item) => {
          return (
            <Link
              to={item.path}
              key={item.id}
              style={{ textDecoration: 'none' }}
            >
              <ButtonMenu icon={item.icon} title={item.title} />
            </Link>
          );
        })}
      </ContainerMenu>

      <LogOut />
    </Container>
  );
}

export default MenuSidebar;
