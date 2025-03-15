import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import InboxMessage from './components/InboxMessage';
import VideoBox from './components/VideoBox';

function App() {
  return (
    <Routes>
      {/* Define the routes for the Login and Dashboard components */}
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path='/inbox' element={<InboxMessage/>} />
      <Route path='/video' element={<VideoBox />} />
    </Routes>
  );
}

export default App;
