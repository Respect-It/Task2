import Navbar from './components/Navbar';
import { Profiler, useState } from 'react';
import './App.css';
import Cubes from './components/Cubes';
import {products} from './data'

export default function App() {
  // const [products, setProducts] = useState(products)
  return (
    <>
      <Navbar/>
      <div className="container">
    <div className="row">
      {
        products.map(products=>(
      
      <div className="col-md-4">
     <Cubes product={products}/>
      </div>
      ))
    }
     </div>
     </div>
    </>
  );
}
  