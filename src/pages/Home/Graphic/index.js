import React, { useEffect, useState } from 'react';
// import { XYPlot, LineSeries } from 'react-vis';
import { useSelector } from 'react-redux';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
} from 'react-vis';
import Colors from '../../../styles/colors';
import { Container, Select } from './styles';

function Graphic() {
  const {
    temperatures,
    airHumidity,
    atmosphericPressure,
    windSpeed,
    pluviometricIndex,
    pH,
    soilMoistude,
  } = useSelector((state) => state.station);

  const [dataToPlot, setDataToPlot] = useState([]);
  const [selectedData, setSelectedData] = useState([]);

  const options = [
    'Temperatura',
    'Umidade do Ar',
    'Pressão Atmosférica',
    'Velocidade do Vento',
    'Indice Pluviométrico',
    'Acidez do Solo',
    'Umidade do Solo',
  ];
  useEffect(() => {
    if (selectedData === 'Temperatura') {
      setDataToPlot(temperatures);
    } else if (selectedData === 'Umidade do Ar') {
      setDataToPlot(airHumidity);
    } else if (selectedData === 'Pressão Atmosférica') {
      setDataToPlot(atmosphericPressure);
    } else if (selectedData === 'Velocidade do Vento') {
      setDataToPlot(windSpeed);
    } else if (selectedData === 'Indice Pluviométrico') {
      setDataToPlot(pluviometricIndex);
    } else if (selectedData === 'Acidez do Solo') {
      setDataToPlot(pH);
    } else if (selectedData === 'Umidade do Solo') {
      setDataToPlot(soilMoistude);
    } else {
      setDataToPlot(temperatures);
    }
  }, [selectedData]);

  const handleSelect = (event) => {
    setSelectedData(event.target.value);
  };

  return (
    <Container>
      <Select
        name="selectedData"
        id="selectedData"
        value={selectedData}
        onChange={handleSelect}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
      <XYPlot width={1000} height={300}>
        <HorizontalGridLines />
        <LineSeries color={Colors.primary} data={dataToPlot} />
        <XAxis />
        <YAxis />
      </XYPlot>
    </Container>
  );
}

export default Graphic;
