import { collection } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

export const medicosRef = collection(db, 'medicos');
export const usersRef = collection(db, 'usuarios');

export const pacientesRef = collection(db, 'pacientes');

export default db;
