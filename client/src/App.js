import React, { useEffect } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import { userLocalStorageFetch } from './utils/userLocalStorageFetch';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = userLocalStorageFetch();

    if(!user) {
      navigate('/login');
    }

  }, []);
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}

export default App;
