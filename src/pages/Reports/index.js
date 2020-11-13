import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { CSVLink } from 'react-csv';
import { toast } from 'react-toastify';
import { format } from 'date-fns';
import { useSelector } from 'react-redux';
import { CommonInput, Button } from '../../components';
import { getReportData } from '../../services/ReportService';

import {
  ContainerBootstrap,
  Title,
  Content,
  MultipleSelect,
  Label,
  FormGroupCheckbox,
} from './index.style';

const Reports = () => {
  const stations = useSelector((state) => state.station.stationLength);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [station, setStation] = useState([0]);
  const [reportData, setReportData] = useState([]);
  const [parameters, setParameters] = useState({
    pressure: false,
    temperature: false,
    acidity: false,
    soilHumidity: false,
    humidity: false,
    wind: false,
  });

  const csvLinkRef = useRef();

  const parametersId = {
    pressure: 1,
    temperature: 2,
    acidity: 3,
    soilHumidity: 4,
    humidity: 5,
    wind: 0,
    rain: 6,
  };

  const parametersName = {
    0: 'Velocidade do Vento',
    1: 'Pressão',
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
          format(new Date(data.time), `MM/dd/yyyy' às 'HH:mm:ss`),
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

    try {
      const response = await getReportData(
        startDate,
        endDate,
        parametersList,
        station[0] === 0
          ? [...Array(stations).keys()].map((i) => i + 1)
          : station
      );
      buildCsv(response);
      csvLinkRef.current.link.click();
    } catch {
      toast.error('Erro ao exportar relatório');
    }
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
            label="PRESSÃO"
            id="soil-temperature"
            type="checkbox"
            value={parameters.pressure}
            onChange={() =>
              setParameters({
                ...parameters,
                pressure: !parameters.pressure,
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
            onChange={(event) => setStation([+event.target.value])}
            width="100%"
            marginTop={10}
            name="station"
          >
            <option value="0" defaultChecked>
              Todas
            </option>
            {[...Array(stations).keys()].map((i) => (
              <option value={i + 1}>{`Estação ${i + 1}`}</option>
            ))}
          </CommonInput>
        </Form.Group>
        <Button
          color="primary"
          paddingVertical="20"
          paddingHorizontal="35"
          position="flex-end"
          marginTop={70}
          onClick={onSubmit}
        >
          Exportar
        </Button>
        <CSVLink
          data={reportData}
          filename="RelatorioA2P2.csv"
          separator=";"
          enclosingCharacter={`"`}
          ref={csvLinkRef}
        />
      </Content>
    </ContainerBootstrap>
  );
};

export default Reports;
