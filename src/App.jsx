import Navbar from './components/Navbar';
import { useState } from 'react';
import './App.css';
import Cubes from './components/Cubes';

export default function App() {
  const [num, setNum] = useState(10)
  return (
    <>
      <Navbar num={num}/>
      <div className="container">
    <div className="row">
      <div className="col-md-4">
     <Cubes/>
      </div>
     </div>
     </div>
    </>
  );
}
  