import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

//queries

export const getMedicos = async () => {
  const response = await api.get('/medicos');
  return response.data;
};

export const getPacientes = async () => {
  const response = await api.get('/pacientes');
  return response.data;
};

export const getUsers = async () => {
  const response = await api.get('/usuarios');
  return response.data;
};

//mutations
export const addMedico = async (medico) => {
  return await api.post('/medicos', medico);
};

export const addPaciente = async (paciente) => {
  return await api.post('/pacientes', paciente);
};

export const addUser = async (user) => {
  return await api.post('/usuarios', user);
};

export const updateMedico = async (medico) => {
  return await api.patch(`/medicos/${medico.id}`, medico);
};

export const destroyMedico = async ({ id }) => {
  return await api.delete(`/medicos/${id}`, id);
};

export default api;
