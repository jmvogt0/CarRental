import './App.css';
import { useState } from 'react';
import CarCard from './components/CarCard/CarCard';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className='Content'>
      <Outlet />
    </div>
  );
}

export default App;
