import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProtectedRoutes from './components/protectedRoutes/ProtectedRoutes';
import Login from './pages/Login';
import HomePage from './pages/HomePage';

function App() {
  const [isToolbarOpen, setIsToolbarOpen] = useState(false);

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
