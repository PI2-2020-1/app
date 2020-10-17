import React from 'react';
import { Button, Title } from './styles';

function ButtonMenu({ icon, title }) {
  return (
    <Button>
      {icon}
      <Title>{title}</Title>
    </Button>
  );
}

export default ButtonMenu;
