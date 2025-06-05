import Navbar from './components/Navbar';
import { useState } from 'react';
import './App.css';
import Cubes from './components/Cubes';

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
    <div className="row">
      <div className="col-md-4">
     <Cubes/>
      </div>
      <div className="col-md-4">
      <Cubes/>
      </div>
      <div className="col-md-4">
      <Cubes/>
      </div>
      <div className="col-md-4">
     <Cubes/>
     </div>
     <div className="col-md-4">
     <Cubes/>
     </div>
     <div className="col-md-4">
     <Cubes/>
     </div> 
     </div>
     </div>
    
    </>
  );
}
  