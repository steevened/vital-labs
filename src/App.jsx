import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <div className=" h-full min-h-screen">
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
