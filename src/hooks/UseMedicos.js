import { addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { useQuery, useMutation } from 'react-query';
import { medicosRef } from '../api/apiFirebase';
import { db } from '../firebase/firebaseConfig';

const fetchMedicos = async () => {
  const data = await getDocs(medicosRef);
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const UseFetchMedicos = () => {
  return useQuery(['medicos'], fetchMedicos);
};

export const useAddMedico = async (data) => {
  return await addDoc(medicosRef, data);
};

const updateMedico = async (id, data) => {
  const medicoDoc = doc(db, 'medicos', id);
  const newFields = { data };
  return await updateDoc(medicoDoc, newFields);
};

export const useDeleteMedico = async (id) => {
  const medicoDoc = doc(db, 'medicos', id);
  await deleteDoc(medicoDoc);
};
