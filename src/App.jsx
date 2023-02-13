import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProtectedRoutes from './components/protectedRoutes/ProtectedRoutes';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import Pacientes from './pages/catalogo/Pacientes';
import Medicos from './pages/catalogo/Medicos';
import Usuarios from './pages/catalogo/Usuarios';

function App() {
  return (
    <BrowserRouter>
      <div className=" h-full min-h-screen">
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/pacientes" element={<Pacientes />} />
            <Route path="/medicos" element={<Medicos />} />
            <Route path="/usuarios" element={<Usuarios />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
