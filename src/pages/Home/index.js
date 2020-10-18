import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import sensorService from '../../services/SensorService';
import Item from './Item';
import { Container, Header, ItemsGrid, Title } from './styles';

const Home = () => {
  const [temperatures, setTemperatures] = useState(null);
  const { username, email } = useSelector((state) => state.user.profile);
  const user = useSelector((state) => state.user);
  console.log('userr', user);
  // useEffect(() => {
  //   console.log('userr', user);
  //   getTemperatures();
  //   setTemperatures([
  //     {
  //       value: 100.0,
  //     },
  //     {
  //       value: 1.0,
  //     },
  //   ]);
  // }, [user]);

  const getTemperatures = async () => {
    const temps = await sensorService.getTemperatures();
    setTemperatures(temps);
  };

  // const {username, email} = store.getState().user ;

  return (
    <Container>
      <Header>
        <Title>Dashboard</Title>
      </Header>
      <ItemsGrid>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </ItemsGrid>
    </Container>
  );
};

export default Home;
