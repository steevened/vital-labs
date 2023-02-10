import { UseFetchMedicos } from '../../../hooks/UseMedicos';
import BtnActions from '../../buttons/BtnActions';
import MainLoader from '../../Loaders/MainLoader';
import Table from '../Table';
import TableContainer from '../TableContainer';
import MedicoItem from './MedicoItem';

const Medicos = ({ searchInput }) => {
  const { data: medicos, isLoading, error } = UseFetchMedicos();

  if (error) return 'An error occurred: ' + error.message;

  const headers = [
    'Nombres',
    'Apellidos',
    'Cédula / RUC',
    '№ Folio',
    'Registro Selescyt',
    'Especialidad',
    'Registro Access',
    '',
  ];

  return (
    <TableContainer headers={headers} isLoading={isLoading}>
      {isLoading ? (
        <MainLoader />
      ) : (
        <Table headers={headers}>
          {medicos
            .filter((medico) => {
              return (
                medico.nombres
                  .toLowerCase()
                  .includes(searchInput.toLowerCase()) ||
                medico.apellidos
                  .toLowerCase()
                  .includes(searchInput.toLowerCase()) ||
                medico.especialidad
                  .toLowerCase()
                  .includes(searchInput.toLowerCase())
              );
            })
            .map((medico) => (
              <MedicoItem medico={medico} />
            ))}
        </Table>
      )}
    </TableContainer>
  );
};

export default Medicos;

{
  /* <BtnActions action="edit" />
                  <BtnActions action="delete" /> */
}
