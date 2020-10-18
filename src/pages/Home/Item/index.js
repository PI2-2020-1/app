import React, { useEffect, useState } from 'react';
import { Container, Image, ContainerInfo, Data, Description } from './styles';
// import logo from '../../assets/logo.svg';
import sun from '../../../assets/sun.svg';
import air from '../../../assets/air.svg';
import pressure from '../../../assets/pressure.svg';
import airHumidity from '../../../assets/airHumidity.svg';
import pH from '../../../assets/pH.svg';
import soilMoisture from '../../../assets/soilMoisture.svg';
import pluviometricIndex from '../../../assets/pluviometricIndex.svg';

function Item({ item }) {
  const [icon, setIcon] = useState();
  const [description, setDescription] = useState();
  const [unity, setUnity] = useState();
  const [value, setValue] = useState();
  useEffect(() => {
    if (item.temperature) {
      setIcon(sun);
      setDescription('Temperatura');
      setUnity('ºC');
      setValue(item.temperature);
    } else if (item.airHumidity) {
      setIcon(airHumidity);
      setDescription('Umidade do Ar');
      setUnity('g/Kg');
      setValue(item.airHumidity);
    } else if (item.atmosphericPressure) {
      setIcon(pressure);
      setDescription('Pressão Atmosférica');
      setUnity('Hg');
      setValue(item.atmosphericPressure);
    } else if (item.windSpeed) {
      setIcon(air);
      setDescription('Velocidade do Vento');
      setUnity('km/h');
      setValue(item.windSpeed);
    } else if (item.pluviometricIndex) {
      setIcon(pluviometricIndex);
      setDescription('Índice Pluviométrico');
      setUnity('mm');
      setValue(item.pluviometricIndex);
    } else if (item.pH) {
      setIcon(pH);
      setDescription('Acidez do Solo');
      setUnity('pH');
      setValue(item.pH);
    } else if (item.soilMoistude) {
      setIcon(soilMoisture);
      setDescription('Umidade do Solo');
      setUnity('kPa');
      setValue(item.soilMoistude);
    } else {
      setIcon(pressure);
      setDescription('Not Found');
      setValue(0);
    }
  }, [item]);

  return (
    <Container>
      <Image src={icon} />
      <ContainerInfo>
        <Data>
          {value} {unity}
        </Data>
        <Description>{description}</Description>
      </ContainerInfo>
    </Container>
  );
}

export default Item;
