import { UseFetchMedicos } from '../../../hooks/UseMedicos';
import { useInputValue } from '../../../store/VitalStore';
import MainLoader from '../../Loaders/MainLoader';
import Table from '../Table';
import TableContainer from '../TableContainer';
import MedicoItem from './MedicoItem';

const Medicos = () => {
  const { data: medicos, isLoading, error } = UseFetchMedicos();

  const { inputValue } = useInputValue((state) => state);

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
    <TableContainer>
      {isLoading ? (
        <MainLoader />
      ) : (
        <Table headers={headers}>
          {medicos
            .filter((medico) => {
              return (
                medico.nombres
                  .toLowerCase()
                  .includes(inputValue.toLowerCase()) ||
                medico.apellidos
                  .toLowerCase()
                  .includes(inputValue.toLowerCase()) ||
                medico.especialidad
                  .toLowerCase()
                  .includes(inputValue.toLowerCase())
              );
            })
            .map((medico) => (
              <MedicoItem key={medico.id} medico={medico} />
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
