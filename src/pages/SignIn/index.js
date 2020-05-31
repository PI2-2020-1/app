import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} width="200" alt="Agro" />
      <form>
        <input name="username" type="text" placeholder="Seu usuário" />
        <input name="email" type="email" placeholder="Seu e-mail" />
        <input
          name="password"
          type="password"
          placeholder="Senha"
        />
        <button type="submit"> Acessar</button>
        <Link to="/register">Criar conta</Link>
      </form>
    </>
  );
}
