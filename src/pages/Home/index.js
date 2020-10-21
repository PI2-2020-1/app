import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';
import Item from './Item';
import Graphic from './Graphic';
import { getStationDataRequest } from '../../store/modules/station/actions';
import { Container, Header, ItemsGrid, Title } from './styles';
import Colors from '../../styles/colors';

const Home = () => {
  const disptach = useDispatch();
  const { lastData, allStationData, loading } = useSelector(
    (state) => state.station
  );

  useEffect(() => {
    disptach(getStationDataRequest());
  }, []);

  console.log('All', allStationData);

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
