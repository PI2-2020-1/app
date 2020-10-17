import React, { useEffect, useState } from 'react';
import sensorService from '../../services/SensorService';
import { useSelector } from 'react-redux';

const Home = () => {
  const [temperatures, setTemperatures] = useState(null);
  const {username, email} = useSelector(state => state.user.profile);
  const user = useSelector(state => state.user);

  useEffect(() => {
    console.log('userr', user);
    getTemperatures();
    setTemperatures(
      [
        {
          "value": 100.0
        },
        {
          "value": 1.0
        }
      ]
    );
  }, [user]);

  const getTemperatures = async() => {
    const temps = await sensorService.getTemperatures();
    setTemperatures(temps);
  };



  // const {username, email} = store.getState().user ;

  return (

        <>
          <h1>Dashboard</h1>
        </>

  );
}

export default Home;
