import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BtnDashboard from '../buttons/BtnDashboard';

const CatalogoAccordion = ({ collapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <ul>
      <li>
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
      <li>
        <BtnDashboard>Usuarios</BtnDashboard>
      </li>
    </ul>
  );
};

export default CatalogoAccordion;
