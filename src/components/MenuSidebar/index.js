import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogOut from '../LogOut';
import Logo from '../Logo';
import LogoText from '../LogoText';
import Colors from '../../styles/colors';
import ButtonMenu from './ButtonMenu';
import { SidebarData } from './SidebarData';
import {
  Container,
  WrapperLogo,
  ContainerInfo,
  FarmOf,
  FarmOwner,
  ContainerMenu,
} from './styles';

function MenuSidebar() {
  const { username } = useSelector((state) => state.user.profile);
  const user = useSelector((state) => state.user);

  const a = 'thi';
  const b = 'Rib';
  return (
    <Container>
      <WrapperLogo>
        <LogoText text="A2P2" logoSize={40} containerSize={30} />
      </WrapperLogo>

      <ContainerInfo>
        <FarmOf>Fazenda de</FarmOf>
        <FarmOwner>
          {user.first_name && user.first_name
            ? `${user.first_name} ${user.last_name}`
            : username}
        </FarmOwner>
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
