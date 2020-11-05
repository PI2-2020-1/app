import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button, CommonInput } from '../../components';

import {
  ContainerBootstrap,
  Title,
  Content,
  MultipleSelect,
  Label,
  FormGroupCheckbox,
} from './index.style';

const Reports = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [station, setStation] = useState('all');
  const [parameters, setParameters] = useState({
    soilTemperature: false,
    temperature: false,
    acidity: false,
    soilHumidity: false,
    humidity: false,
    wind: false,
  });

  return (
    <ContainerBootstrap fluid>
      <Title size="24" marginBottom={3}>
        Relatórios
      </Title>
      <Content>
        <Form.Group controlId="startDateNotifications">
          <Label id="start-date-label" for="start_date">
            DATA INICIAL
          </Label>
          <CommonInput
            name="start_date"
            placeHolder="DATA DE INÍCIO"
            type="date"
            marginBottom={35}
            padding={25}
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="endDateNotifications">
          <Label id="end-date-label" for="end_date">
            DATA FINAL
          </Label>
          <CommonInput
            name="end_date"
            placeHolder="DATA FINAL"
            type="date"
            marginBottom={35}
            padding={25}
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
          />
        </Form.Group>

        <Label id="parameters-label">PARÂMETROS</Label>
        <Form.Text className="text-muted">
          Defina quais parâmetros serão impressos no relatório
        </Form.Text>
        <FormGroupCheckbox controlId="parametersNotifications">
          <MultipleSelect
            padding={20}
            label="TEMPERATURA DO SOLO"
            id="soil-temperature"
            type="checkbox"
            value={parameters.soilTemperature}
            onChange={() =>
              setParameters({
                ...parameters,
                soilTemperature: !parameters.soilTemperature,
              })
            }
          />
          <MultipleSelect
            padding={20}
            label="TEMPERATURA DO AMBIENTE"
            id="temperature"
            type="checkbox"
            value={parameters.temperature}
            onChange={() =>
              setParameters({
                ...parameters,
                temperature: !parameters.temperature,
              })
            }
          />
          <MultipleSelect
            padding={20}
            label="ACIDEZ DO SOLO"
            id="acidity"
            type="checkbox"
            value={parameters.acidity}
            onChange={() =>
              setParameters({
                ...parameters,
                acidity: !parameters.acidity,
              })
            }
          />
          <MultipleSelect
            padding={20}
            label="UMIDADE DO SOLO"
            id="soil-humidity"
            type="checkbox"
            value={parameters.soilHumidity}
            onChange={() =>
              setParameters({
                ...parameters,
                soilHumidity: !parameters.soilHumidity,
              })
            }
          />
          <MultipleSelect
            padding={20}
            label="UMIDADE DO AMBIENTE"
            id="humidity"
            type="checkbox"
            value={parameters.humidity}
            onChange={() =>
              setParameters({
                ...parameters,
                humidity: !parameters.humidity,
              })
            }
          />
          <MultipleSelect
            padding={20}
            label="VELOCIDADE DO VENTO"
            id="wind"
            type="checkbox"
            value={parameters.wind}
            onChange={() =>
              setParameters({
                ...parameters,
                wind: !parameters.wind,
              })
            }
          />
        </FormGroupCheckbox>

        <Form.Group controlId="sensorNotifications">
          <Label id="sendor-label" for="sensor">
            ESTAÇÃO
          </Label>
          <Form.Text className="text-muted">
            Escolha a estação que você deseja ver os dados no relatório
          </Form.Text>
          <CommonInput
            as="select"
            type="select"
            padding={15}
            onChange={(event) => setStation(event.target.value)}
            width="100%"
            marginTop={10}
          >
            <option value="all" defaultChecked>
              Todas
            </option>
            <option value="estacao1">Estação 1</option>
            <option value="estacao2">Estação 2</option>
            <option value="estacao3">Estação 3</option>
            <option value="estacao4">Estação 4</option>
            <option value="estacao5">Estação 5</option>
          </CommonInput>
        </Form.Group>

        <Button
          color="primary"
          paddingVertical="20"
          paddingHorizontal="35"
          position="flex-end"
          marginTop={70}
        >
          Gerar Relatório
        </Button>
      </Content>
    </ContainerBootstrap>
  );
};

export default Reports;
