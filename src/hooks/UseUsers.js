import { addDoc, getDocs } from 'firebase/firestore';
import { useQuery } from 'react-query';

import { usersRef } from '../api/apiFirebase';

const fetchUsers = async () => {
  const data = await getDocs(usersRef);
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const UseFetchUsers = () => {
  return useQuery(['usuarios'], fetchUsers);
};

export const useAddUser = async (data) => {
  await addDoc(usersRef, data);
};
