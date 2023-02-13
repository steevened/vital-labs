import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCollapsed, useInputValue } from '../../store/VitalStore';
import BtnDashboard from '../buttons/BtnDashboard';

const CatalogoAccordion = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { openCollapsed } = useCollapsed((state) => state);
  const { setInputValue } = useInputValue((state) => state);

  const resetState = () => {
    openCollapsed();
    setInputValue('');
  };

  return (
    <ul>
      <li
        onClick={() => {
          navigate('/medicos');
          resetState();
        }}
        className={`w-full ${location.pathname === '/medicos' ? 'active' : ''}`}
      >
        <BtnDashboard>Medicos</BtnDashboard>
      </li>
      <li
        className={`w-full ${
          location.pathname === '/pacientes' ? 'active' : ''
        }`}
        onClick={() => {
          navigate('/pacientes');
          resetState();
        }}
      >
        <BtnDashboard>Pacientes</BtnDashboard>
      </li>
      <li
        onClick={() => {
          navigate('/usuarios');
          resetState();
        }}
        className={`w-full ${
          location.pathname === '/usuarios' ? 'active' : ''
        }`}
      >
        <BtnDashboard>Usuarios</BtnDashboard>
      </li>
    </ul>
  );
};

export default CatalogoAccordion;
