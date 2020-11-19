import React, { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { connect, useDispatch, useSelector } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Col, Spinner, Row } from 'react-bootstrap';
import {
  Container,
  ParametersSection,
  Text,
  ContainerRow,
  EmployeeSection,
  ContainerTitle,
  ContainerForm,
} from './styles';
import { Input, Button } from '../../../components';
import { updateParameterRequest } from '../../../store/modules/parameter/actions';

function Parameters({ handleSubmit, submitting }) {
  const disptach = useDispatch();
  const { parameters } = useSelector((state) => state.parameter);
  const [enableDigit, setEnableDigit] = useState(false);

  const onSubmitParams = (props) => {
    // console.log('DADOS: ', props);
    disptach(updateParameterRequest(props));
  };

  useEffect(() => {
    console.log('parametersEffect', parameters);
    if (!parameters) {
      setEnableDigit(true);
    }
  }, [parameters]);

  return (
    <>
      <ContainerTitle>
        <Text size={25}> Parâmetros </Text>
      </ContainerTitle>
      <ParametersSection>
        <ContainerForm onSubmit={handleSubmit(onSubmitParams)}>
          <ContainerRow>
            <Text marginRight={295} paddingLeft={350} bold>
              Min
            </Text>
            <Text marginRight={225} bold>
              Max
            </Text>
          </ContainerRow>
          <ContainerRow>
            <Col>
              <Text paddingRight={30}>Velocidade do vento</Text>
              <Text paddingRight={30}>Pressão Atmosférica</Text>
              <Text paddingRight={30}>Temperatura</Text>
              <Text paddingRight={30}>PH do Solo</Text>
              <Text paddingRight={30}>Umidade do Solo</Text>
              <Text paddingRight={30}>Umidade do Ambiente</Text>
              <Text paddingRight={30}>Índice Pluviométrico</Text>
            </Col>
            <Col>
              <Input
                name="windSpeedMin"
                placeHolder="Min"
                type="number"
                parse={(value) => Number(value)}
                disabled={!enableDigit}
              />
              <Input
                name="pressureMin"
                placeHolder="Min"
                parse={(value) => Number(value)}
                disabled={!enableDigit}
              />
              <Input
                name="temperatureMin"
                placeHolder="Min"
                parse={(value) => Number(value)}
                disabled={!enableDigit}
              />
              <Input
                name="phMin"
                placeHolder="Min"
                parse={(value) => Number(value)}
                disabled={!enableDigit}
              />
              <Input
                name="soilHumidityMin"
                placeHolder="Min"
                parse={(value) => Number(value)}
                disabled={!enableDigit}
              />
              <Input
                name="environmentHumidityMin"
                placeHolder="Min"
                parse={(value) => Number(value)}
                disabled={!enableDigit}
              />
              <Input
                name="rainMin"
                placeHolder="Min"
                parse={(value) => Number(value)}
                disabled={!enableDigit}
              />
            </Col>
            <Col>
              <Input
                name="windSpeedMax"
                placeHolder="Max"
                parse={(value) => Number(value)}
                disabled={!enableDigit}
              />
              <Input
                name="pressureMax"
                placeHolder="Max"
                parse={(value) => Number(value)}
                disabled={!enableDigit}
              />
              <Input
                name="temperatureMax"
                placeHolder="Max"
                parse={(value) => Number(value)}
                disabled={!enableDigit}
              />
              <Input
                name="phMax"
                placeHolder="Max"
                type="number"
                disabled={!enableDigit}
              />
              <Input
                name="soilHumidityMax"
                placeHolder="Max"
                type="number"
                disabled={!enableDigit}
              />
              <Input
                name="environmentHumidityMax"
                placeHolder="Max"
                type="number"
                disabled={!enableDigit}
              />
              <Input
                name="rainMax"
                placeHolder="Max"
                type="number"
                disabled={!enableDigit}
              />
            </Col>
          </ContainerRow>
          <Button
            color="primary"
            rounded
            type={enableDigit ? 'button' : 'submit'}
            paddingHorizontal={20}
            paddingTop={10}
            paddingBottom={10}
            disabled={submitting}
            onClick={() => setEnableDigit(!enableDigit)}
          >
            {enableDigit ? 'Enviar' : 'Editar'}
          </Button>
        </ContainerForm>
      </ParametersSection>
    </>
  );
}

const mapStateToProps = (state, props) => {
  // WIND = 0
  // PRESSURE = 1
  // AIR_TEMPERATURE = 2
  // PH = 3
  // SOIL_UMIDITY = 4
  // AIR_UMIDITY = 5
  // RAIN = 6
  console.log('state.parameter.parameters', state.parameter.parameters);
  const { parameters } = state.parameter;
  const initialValue = {
    windSpeedMin: parameters[0].min_value ? parameters[0].min_value : '',
    windSpeedMax: parameters[0].max_value ? parameters[0].max_value : '',
    pressureMin: parameters[1].min_value ? parameters[1].min_value : '',
    pressureMax: parameters[1].max_value ? parameters[1].max_value : '',
    temperatureMin: parameters[2].min_value ? parameters[2].min_value : '',
    temperatureMax: parameters[2].max_value ? parameters[2].max_value : '',
    phMin: parameters[3].min_value ? parameters[3].min_value : '',
    phMax: parameters[3].max_value ? parameters[3].max_value : '',
    soilHumidityMin: parameters[4].min_value ? parameters[4].min_value : '',
    soilHumidityMax: parameters[4].max_value ? parameters[4].max_value : '',
    environmentHumidityMin: parameters[5].min_value
      ? parameters[5].min_value
      : '',
    environmentHumidityMax: parameters[5].max_value
      ? parameters[5].max_value
      : '',
    rainMin: parameters[6].min_value ? parameters[6].min_value : '',
    rainMax: parameters[6].max_value ? parameters[6].max_value : '',
  };
  return {
    // initialValues: state.parameter.paramtetersInitial, // retrieve name from redux store
    initialValues: initialValue, // retrieve name from redux store
  };
};

export default connect(mapStateToProps)(
  reduxForm({
    form: 'parameters', // a unique identifier for this form
    enableReinitialize: true,
  })(Parameters)
);
