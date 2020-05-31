import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
// import { Container } from './styles';

export default function SignUp() {
  return (
    <>
      <img src={logo} width="200" alt="Agro" />

      <form>
        <input name="username" type="text" placeholder="Usuário" />
        <input name="email" type="email" placeholder="E-mail" />       
        <input name="password1" type="password" placeholder="Senha" />
        <input name="password2" type="password" placeholder="Confirmar Senha" />
        <button type="submit"> Criar conta </button>
        <Link to="/">Já tenho login</Link>
      </form>
    </>
  );
}
