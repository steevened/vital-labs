import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProtectedRoutes from './components/protectedRoutes/ProtectedRoutes';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import Pacientes from './pages/catalogo/Pacientes';
import HomeLayout from './layouts/HomeLayout';

function App() {
  const [isToolbarOpen, setIsToolbarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <BrowserRouter>
      <div className=" h-full min-h-screen">
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route
              path="/"
              element={
                <HomePage
                  isToolbarOpen={isToolbarOpen}
                  setIsToolbarOpen={setIsToolbarOpen}
                  collapsed={collapsed}
                  setCollapsed={setCollapsed}
                />
              }
            />
            <Route
              path="/pacientes"
              element={
                <Pacientes
                  isToolbarOpen={isToolbarOpen}
                  setIsToolbarOpen={setIsToolbarOpen}
                  collapsed={collapsed}
                  setCollapsed={setCollapsed}
                />
              }
            />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
