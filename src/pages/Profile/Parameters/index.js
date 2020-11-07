import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { reduxForm } from 'redux-form';
import { Col, Spinner } from 'react-bootstrap';
import {
  Container,
  ParametersSection,
  Text,
  ContainerRow,
  EmployeeSection,
  ContainerTitle,
  ContainerForm,
} from './styles';
// import { Input, Button } from '../../components';
import { Input, Button } from '../../../components';


function Parameters({ handleSubmit, submitting }) {

  const onSubmitParams = (props) => {
    console.log('DADOS: ', props);
  };
  return (
    <>
      <ContainerTitle>
        <Text size={25}> Parâmetros </Text>
        <Button
          color='primary'
          rounded
          type="submit"
          paddingHorizontal={20}
          paddingTop={10}
          paddingBottom={10}
          disabled={submitting}
          onClick={handleSubmit(onSubmitParams)}
        >
          Enviar
        </Button>
      </ContainerTitle>
      <ParametersSection>
        <ContainerForm>
          <ContainerRow>
            <Col>
              <Text paddingRight={30}>Temperatura do Solo</Text>
              <Text paddingRight={30}>Temperatura do Ambiente</Text>
              <Text paddingRight={30}>Acidez do Solo</Text>
            </Col>
            <Col>
              <Input name='soilTemperature' placeHolder='Temperatura do Solo' type='text' />
              <Input name='environmentTemperature' placeHolder='Temperatura do Ambiente' type='text' />
              <Input name='soilAcidity' placeHolder='Acidez do Solo' type='text' />
            </Col>
            <Col>
              <Text paddingRight={30}>Umidade do Solo</Text>
              <Text paddingRight={30}>Umidade do Ambiente</Text>
              <Text paddingRight={30}>Velocidade do vento</Text>
            </Col>
            <Col>
              <Input name='soilHumidity' placeHolder='Umidade do Solo' type='text' />
              <Input name='environmentHumidity' placeHolder='Umidade do Ambiente' type='text' />
              <Input name='windSpeed' placeHolder='Velocidade do vento' type='text' />
            </Col>
          </ContainerRow>
        </ContainerForm>
      </ParametersSection>
    </>
  );
}

export default reduxForm({ form: 'parameters' })(Parameters);