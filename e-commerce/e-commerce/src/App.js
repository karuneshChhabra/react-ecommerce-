import './App.css';
import { ProductDetail } from './components/ProductDetail';
import {BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>Hello App</span>
      
        <Router>
          <Routes>
            <Route path="/" element={ <ProductList/>} />
            <Route path="product" element={ <ProductDetail/>} />
        
          </Routes>
  </Router>

 
        
      
        
      </header>
    </div>
  );
}

export default App;
