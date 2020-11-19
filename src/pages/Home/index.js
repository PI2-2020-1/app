import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
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
  const [itemsOutsideParameters, setItemsOutsideParameters] = useState([]);

  const { lastData, allStationData, loading, stationLength } = useSelector(
    (state) => state.station
  );
  const { parameters } = useSelector((state) => state.parameter);

  useEffect(() => {
    const outsideParameters = [];
    if (
      lastData[0].value < parameters[0].min_value ||
      lastData[0].value > parameters[0].max_value
    ) {
      outsideParameters.push(0);
    }
    if (
      lastData[1].value < parameters[1].min_value ||
      lastData[1].value > parameters[1].max_value
    ) {
      outsideParameters.push(1);
    }
    if (
      lastData[2].value < parameters[2].min_value ||
      lastData[2].value > parameters[2].max_value
    ) {
      outsideParameters.push(2);
    }
    if (
      lastData[3].value < parameters[3].min_value ||
      lastData[3].value > parameters[3].max_value
    ) {
      outsideParameters.push(3);
    }
    if (
      lastData[4].value < parameters[4].min_value ||
      lastData[4].value > parameters[4].max_value
    ) {
      outsideParameters.push(4);
    }
    if (
      lastData[5].value < parameters[5].min_value ||
      lastData[5].value > parameters[5].max_value
    ) {
      outsideParameters.push(5);
    }
    if (
      lastData[6].value < parameters[6].min_value ||
      lastData[6].value > parameters[6].max_value
    ) {
      outsideParameters.push(6);
    }

    setItemsOutsideParameters(outsideParameters);
  }, [lastData]);

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
            {lastData &&
              itemsOutsideParameters &&
              lastData.map((item) => (
                <Item
                  item={item}
                  itemsOutsideParameters={itemsOutsideParameters}
                />
              ))}
          </ItemsGrid>
          <Graphic />
        </>
      )}
    </Container>
  );
};

export default Home;
