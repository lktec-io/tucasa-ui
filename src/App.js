import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Component/Register';
import AllStudents from './Component/AllStudents';
import Welcome from './Component/Welcome';
import VideoIntro from './Component/VideoIntro';
import Receipt from './Component/Receipt';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
         <Route path="/what" element={<Receipt />} />
        <Route path="/intro" element={<VideoIntro />} />
        <Route path="/register" element={<Register />} />
        <Route path="/all" element={<AllStudents />} />
       
      </Routes>
    </BrowserRouter>
  );
}
