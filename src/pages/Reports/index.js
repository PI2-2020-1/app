import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { CommonInput } from '../../components';
import { getReportData } from '../../services/ReportService';

import {
  ContainerBootstrap,
  Title,
  Content,
  MultipleSelect,
  Label,
  FormGroupCheckbox,
  Button,
} from './index.style';

const Reports = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [station, setStation] = useState('0');
  const [reportData, setReportData] = useState([]);
  const [parameters, setParameters] = useState({
    soilTemperature: false,
    temperature: false,
    acidity: false,
    soilHumidity: false,
    humidity: false,
    wind: false,
  });

  const parametersId = {
    soilTemperature: 1,
    temperature: 2,
    acidity: 3,
    soilHumidity: 4,
    humidity: 5,
    wind: 0,
    rain: 6,
  };

  const parametersName = {
    0: 'Velocidade do Vento',
    1: 'Temperatura do Solo',
    2: 'Temperatura do Ambiente',
    3: 'PH',
    4: 'Umidade do Solo',
    5: 'Umidade do Ar',
    6: 'Índice Pluviomátrico',
  };

  const buildCsv = (response) => {
    const csvTemp = [['Estação', 'Parâmetro', 'Valor', 'Data da Coleta']];

    response.forEach((parameter) => {
      parameter.forEach((data) => {
        csvTemp.push([
          data.station.toString(),
          parametersName[data.parameter],
          data.value.toString(),
          data.time,
        ]);
      });
    });
    setReportData(csvTemp);
  };

  const onSubmit = async () => {
    const parametersList = [];

    Object.entries(parameters).forEach(
      ([parameter, show]) =>
        show && parametersList.push(parametersId[parameter])
    );

    const response = await getReportData(startDate, endDate, parametersList, [
      station,
    ]);
    buildCsv(response);
  };

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
          <MultipleSelect
            padding={20}
            label="ÍNDICE PLUVIOMÉTRICO"
            id="rain"
            type="checkbox"
            value={parameters.rain}
            onChange={() =>
              setParameters({
                ...parameters,
                rain: !parameters.rain,
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
            onChange={(event) => setStation(+event.target.value)}
            width="100%"
            marginTop={10}
          >
            <option value="0" defaultChecked>
              Todas
            </option>
            <option value="1">Estação 1</option>
            <option value="2">Estação 2</option>
            <option value="3">Estação 3</option>
            <option value="4">Estação 4</option>
            <option value="5">Estação 5</option>
          </CommonInput>
        </Form.Group>
        <Button
          color="primary"
          paddingVertical="20"
          paddingHorizontal="35"
          position="flex-end"
          marginTop={70}
          onClick={onSubmit}
          data={reportData}
          filename="RelatorioA2P2.csv"
        >
          Gerar Relatório
        </Button>
      </Content>
    </ContainerBootstrap>
  );
};

export default Reports;
