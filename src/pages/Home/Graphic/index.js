import React, { useEffect, useState } from 'react';
// import { XYPlot, LineSeries } from 'react-vis';
import { useSelector, useDispatch } from 'react-redux';
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
  const { temperatures } = useSelector((state) => state.station);
  const [dataToPlot, setDataToPlot] = useState([]);
  const [selectedData, setSelectedData] = useState([]);

  useEffect(() => {
    const data = temperatures.map((item, index) => {
      return { x: index, y: item };
    });
    setDataToPlot(data);
    console.log('dataToPlot', data);
  }, []);

  console.log('TEMPGRAPH', temperatures);

  return (
    <Container>
      <XYPlot width={1000} height={300}>
        <HorizontalGridLines />
        {/* <LineSeries data={data} /> */}
        <LineSeries color={Colors.primary} data={dataToPlot} />
        <XAxis />
        <YAxis />
      </XYPlot>
    </Container>
  );
}

export default Graphic;
