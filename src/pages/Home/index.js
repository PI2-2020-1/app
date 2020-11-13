import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';
import Item from './Item';
import Graphic from './Graphic';
import { getStationDataRequest, getStationLastedDataRequest } from '../../store/modules/station/actions';
import { Container, ContainerSelect, Select, Header, ItemsGrid, Title } from './styles';
import Colors from '../../styles/colors';

const Home = () => {
  const disptach = useDispatch();
  const [selectedData, setSelectedData] = useState(1);

  const { lastData, allStationData, loading, stationLength } = useSelector(
    (state) => state.station
  );

  useEffect(() => {
    disptach(getStationDataRequest());
  }, [getStationDataRequest]);

  useEffect(() => {
    disptach(getStationLastedDataRequest(selectedData));
  }, [selectedData]);


  const handleSelect = (event) => {
    setSelectedData(event.target.value);
  };

  let options = []
  for (let i = 0; i < stationLength; i++) {
    options.push(<option value={i + 1}>Estação {i + 1}</option>)
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
