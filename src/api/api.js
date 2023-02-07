import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getMedicos = async () => {
  const response = await api.get('/medicos');
  return response.data;
};

export const addMedico = async (medico) => {
  return await api.post('/medicos', medico);
};

export const updateMedico = async (medico) => {
  return await api.patch(`/medicos/${medico.id}`, medico);
};

export const destroyMedico = async ({ id }) => {
  return await api.delete(`/medicos/${id}`, id);
};

export default api;
