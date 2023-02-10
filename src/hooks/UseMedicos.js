import { addDoc, getDocs } from 'firebase/firestore';
import { useQuery } from 'react-query';
import { medicosRef } from '../api/apiFirebase';

const fetchMedicos = async () => {
  const data = await getDocs(medicosRef);
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const UseFetchMedicos = () => {
  return useQuery(['medicos'], fetchMedicos);
};

export const useAddMedico = async (data) => {
  await addDoc(medicosRef, data);
};
