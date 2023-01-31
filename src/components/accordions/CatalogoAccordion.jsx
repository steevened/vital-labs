import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BtnDashboard from '../buttons/BtnDashboard';

const CatalogoAccordion = ({ collapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <ul>
      <li
        onClick={() => {
          navigate('/medicos');
          collapsed(true);
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
          collapsed(true);
        }}
      >
        <BtnDashboard>Pacientes</BtnDashboard>
      </li>
      <li
        onClick={() => {
          navigate('/usuarios');
          collapsed(true);
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
