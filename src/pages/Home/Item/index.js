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

function Item({ item, itemsOutsideParameters }) {
  const [icon, setIcon] = useState();
  const [description, setDescription] = useState();
  const [unity, setUnity] = useState();
  const [value, setValue] = useState();
  const [border, setBorder] = useState(false);

  console.log('outsideItemsInside', itemsOutsideParameters);
  // WIND = 0
  // PRESSURE = 1
  // AIR_TEMPERATURE = 2
  // PH = 3
  // SOIL_UMIDITY = 4
  // AIR_UMIDITY = 5
  // RAIN = 6
  useEffect(() => {
    if (item.parameter === 2) {
      setIcon(sun);
      setDescription('Temperatura');
      setUnity('ºC');
      setValue(item.value);
      // itemsOutsideParameters.includes('air_temperature')
      //   ? setBorder(true)
      //   : setBorder('');
    } else if (item.parameter === 5) {
      setIcon(airHumidity);
      setDescription('Umidade do Ar');
      setUnity('g/Kg');
      setValue(item.value);
    } else if (item.parameter === 1) {
      setIcon(pressure);
      setDescription('Pressão Atmosférica');
      setUnity('Hg');
      setValue(item.value);
    } else if (item.parameter === 0) {
      setIcon(air);
      setDescription('Velocidade do Vento');
      setUnity('km/h');
      setValue(item.value);
    } else if (item.parameter === 6) {
      setIcon(pluviometricIndex);
      setDescription('Índice Pluviométrico');
      setUnity('mm');
      setValue(item.value);
    } else if (item.parameter === 3) {
      setIcon(pH);
      setDescription('Acidez do Solo');
      setUnity('pH');
      setValue(item.value);
    } else if (item.parameter === 4) {
      setIcon(soilMoisture);
      setDescription('Umidade do Solo');
      setUnity('kPa');
      setValue(item.value);
    } else {
      setIcon(pressure);
      setDescription('Not Found');
      setValue(0);
    }
  }, [item]);

  return (
    <Container
      /* border={border} */ style={
        itemsOutsideParameters.includes(item.parameter)
          ? { border: '0.5px solid #ef7070' }
          : {}
      }
    >
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
