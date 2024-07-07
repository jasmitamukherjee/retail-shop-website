import './App.css';
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import OurShops from './components/OurShops';
import ContactUs from './components/ContactUs';
import Products from './components/Products';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/our-shops' element={<OurShops/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path='/products' element={<Products/>}/>


      </Routes>
    </Router>
  );
}

export default App;
