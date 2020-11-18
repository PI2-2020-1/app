import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';
import Item from './Item';
import Graphic from './Graphic';
import {
  getStationDataRequest,
  getStationLastedDataRequest,
} from '../../store/modules/station/actions';
import { getParametersDataRequest } from '../../store/modules/parameter/actions';
import {
  Container,
  ContainerSelect,
  Select,
  Header,
  ItemsGrid,
  Title,
} from './styles';
import Colors from '../../styles/colors';

const Home = () => {
  const disptach = useDispatch();
  const [selectedData, setSelectedData] = useState(1);

  const { lastData, allStationData, loading, stationLength } = useSelector(
    (state) => state.station
  );
  const { parameters } = useSelector((state) => state.parameter);

  useEffect(() => {
    if (
      lastData[0].value < parameters[0].min_value ||
      lastData[0].value > parameters[0].max_value
    ) {
      console.log(' // WIND = 0 ERROR');
    }
    if (
      lastData[1].value < parameters[1].min_value ||
      lastData[1].value > parameters[1].max_value
    ) {
      console.log(' // PRESSURE = 1 ERROR');
    }
    if (
      lastData[2].value < parameters[2].min_value ||
      lastData[2].value > parameters[2].max_value
    ) {
      console.log(' // AIR_TEMPERATURE = 2 ERROR');
    }
    if (
      lastData[3].value < parameters[3].min_value ||
      lastData[3].value > parameters[3].max_value
    ) {
      console.log(' // PH = 3 ERROR');
    }
    if (
      lastData[4].value < parameters[4].min_value ||
      lastData[4].value > parameters[4].max_value
    ) {
      console.log(' // SOIL_UMIDITY = 4 ERROR');
    }
    if (
      lastData[5].value < parameters[5].min_value ||
      lastData[5].value > parameters[5].max_value
    ) {
      console.log(' // AIR_UMIDITY = 5 ERROR');
    }
    if (
      lastData[6].value < parameters[6].min_value ||
      lastData[6].value > parameters[6].max_value
    ) {
      console.log(' // RAIN = 6 ERROR');
    }

    console.log('value', lastData[2].value);
    console.log('min', parameters[2].min_value);
    console.log('max', parameters[2].max_value);

    // const errors = lastData.map((item) => {});
  }, [lastData, parameters]);

  useEffect(() => {
    disptach(getStationLastedDataRequest(selectedData));
    disptach(getStationDataRequest(selectedData));
    disptach(getParametersDataRequest());
  }, [selectedData]);

  const handleSelect = (event) => {
    setSelectedData(event.target.value);
  };

  const options = [];
  for (let i = 0; i < stationLength; i++) {
    options.push(<option value={i + 1}>Estação {i + 1}</option>);
  }
  // console.log('All', allStationData);

  return (
    <Container>
      <Header>
        <Title>Dashboard</Title>
      </Header>
      {loading ? (
        <FaSpinner
          color={Colors.primary}
          size={35}
          style={{ marginLeft: 50 }}
        />
      ) : (
        <>
          <ContainerSelect>
            <Select
              name="selectedData"
              id="selectedData"
              value={selectedData}
              onChange={handleSelect}
            >
              {options}
            </Select>
          </ContainerSelect>
          {/* <SelectStation stationLength={stationLength} /> */}
          <ItemsGrid>
            {lastData && lastData.map((item) => <Item item={item} />)}
          </ItemsGrid>
          <Graphic />
        </>
      )}
    </Container>
  );
};

export default Home;
