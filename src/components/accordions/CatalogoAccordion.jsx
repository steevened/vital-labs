import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCollapsed } from '../../store/ModalStore';
import BtnDashboard from '../buttons/BtnDashboard';

const CatalogoAccordion = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { openCollapsed } = useCollapsed((state) => state);

  return (
    <ul>
      <li
        onClick={() => {
          navigate('/medicos');
          openCollapsed();
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
          openCollapsed();
        }}
      >
        <BtnDashboard>Pacientes</BtnDashboard>
      </li>
      <li
        onClick={() => {
          navigate('/usuarios');
          openCollapsed();
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
