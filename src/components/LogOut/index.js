import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../store/modules/auth/actions';

function LogOut() {
  const disptach = useDispatch();
  // const loading = useSelector(state => state.auth.loading);

  function handleSignOut() {
    disptach(signOut());
    console.log('saaaiu')
  }

  return (
    <button onClick={handleSignOut}> Sair </button>
  );
}

export default LogOut;