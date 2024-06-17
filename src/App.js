import './App.css';
import Home from './components/Home'
import Products from './components/Products'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>

      </Routes>
    </Router>
  );
}

export default App;
