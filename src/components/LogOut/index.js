import React from 'react';
import { useDispatch } from 'react-redux';
import * as BiIcons from 'react-icons/bi';
import { signOut } from '../../store/modules/auth/actions';
import { Button, Text } from './styles';

function LogOut() {
  const disptach = useDispatch();
  // const loading = useSelector(state => state.auth.loading);

  function handleSignOut() {
    disptach(signOut());
    console.log('saaaiu');
  }

  return (
    <Button onClick={handleSignOut}>
      <BiIcons.BiLogOutCircle size={30} />
      <Text>Sair</Text>
    </Button>
  );
}

export default LogOut;
