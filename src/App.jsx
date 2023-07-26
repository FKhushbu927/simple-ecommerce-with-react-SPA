import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import shop from './components/Shop/shop';

function App() {
  const [count, setCount] = useState(0)

    return(
      <div className='App'>
          <Header></Header>
      </div>
      
    );
}

export default App
