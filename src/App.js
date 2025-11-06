import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Component/Register';
import AllStudents from './Component/AllStudents';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/all" element={<AllStudents />} />
      </Routes>
    </BrowserRouter>
  );
}
