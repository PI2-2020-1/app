import React, { useEffect, useState } from 'react';
import sensorService from '../../services/SensorService';
import './App.css';
import { useSelector } from 'react-redux';
import LogOut from '../../components/LogOut'

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
    <div className="App">
      <h2>{username}</h2>
      <h3>{email}</h3>
      <LogOut />
      <p>Temperatures:</p>
        <table>
          <tbody>
            <tr>
              <th>Valores</th>
            </tr>
            { temperatures &&
              temperatures.map(temperature => (
                <tr key={temperature.value}>
                  <td>
                  {temperature.value}
                  </td>
                </tr>
                )
              )
            }
          </tbody>
        </table>
    </div>
  );
}

export default Home;
