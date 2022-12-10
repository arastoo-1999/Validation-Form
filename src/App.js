import React from 'react';
import "./App.css";

import { Routes, Route, Navigate } from 'react-router-dom';

// Components
import SignUp from './Components/SignUp';
import Login from './Components/Login';

const App = () => {
  return (
      <div className="App">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/*" element={<Navigate to="/signup" />} />
        </Routes>
      </div>
  );
};

export default App;
