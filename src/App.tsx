// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProcedureView from './pages/ProcedureView';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';

const App: React.FC = () => {
  console.log("App Loaded");

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/procedure/:id" element={<ProcedureView />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;



