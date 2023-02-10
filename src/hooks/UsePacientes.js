import { addDoc, getDocs } from 'firebase/firestore';
import { useQuery } from 'react-query';
import { pacientesRef } from '../api/apiFirebase';

const fetchPacientes = async () => {
  const data = await getDocs(pacientesRef);
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const UseFetchPacientes = () => {
  return useQuery(['pacientes'], fetchPacientes);
};

export const useAddPaciente = async (data) => {
  await addDoc(pacientesRef, data);
};
