import { toast } from 'react-toastify';
import api from './api';

const getReportData = async (start, end, parameterList, stationList = [1]) => {
  const report = await api
    .post('/api/report', {
      start,
      end,
      parameter_list: parameterList,
      station_pk_list: stationList,
    })
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      toast.error(
        'Falha ao recuperar relatório. Caso o erro persista, entre em contato com o administrador do sistema'
      );
    });
  return report;
};

export { getReportData };
