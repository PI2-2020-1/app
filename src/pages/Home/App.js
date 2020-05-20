import React, { useEffect, useState } from 'react';
import sensorService from '../../services/SensorService';
import './App.css';

const App = () => {
  const [temperatures, setTemperatures] = useState(null);

  useEffect(() => {
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
  }, []);

  const getTemperatures = async() => {
    const temps = await sensorService.getTemperatures();
    setTemperatures(temps);
  };

  return (
    <div className="App">
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

export default App;
