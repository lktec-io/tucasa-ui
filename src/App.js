import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Component/Register';
import AllStudents from './Component/AllStudents';
import Welcome from './Component/Welcome';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/all" element={<AllStudents />} />
      </Routes>
    </BrowserRouter>
  );
}
