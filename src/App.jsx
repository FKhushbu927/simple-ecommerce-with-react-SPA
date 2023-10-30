import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Shop from './components/Shop/Shop.jsx';
import { Outlet } from 'react-router-dom';
import Home from './components/Layout/Home';

function App() {
  const [count, setCount] = useState(0)

    return(
      <div className='App'>
        <>
          <Home></Home>
       
        </>
          
      </div>
      
    );
}

export default App
