import React, { useEffect } from 'react';
import { getParametersDataRequest } from '../../store/modules/parameter/actions';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from './styles';
import Parameters from './Parameters';

function Notification() {
  const disptach = useDispatch();
  useEffect(() => {
    disptach(getParametersDataRequest());
  }, [getParametersDataRequest]);

  const { loading, parameters } = useSelector((state) => state.parameter);

  console.log('reducerParams', loading, parameters);

  return (
    <Container>
      <Parameters />
    </Container>
  );
}

export default Notification;
