import React from 'react';
import {Titulo, SubTitulo } from './index.style';
import Logo from '../../../../components/Logo/logo';

const LogoComTexto = () => (
  <>
    <Titulo>A2P2</Titulo>
    <Logo height={150} width={150} color="#FFF">
    </Logo>
    <SubTitulo color="#FFF" size={20}>ANALISADOR DE AMBIENTES</SubTitulo>
    <SubTitulo color="#FFF" size={20}>PARA PLANTAÇÃO</SubTitulo>
  </>
);

export default LogoComTexto;