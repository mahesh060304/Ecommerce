import './shop.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/home';
import Layout from './components/Layout';
import Login  from './components/login';
import Addcart from './components/Addcart';
import MensClothing from './components/MensClothing';
import WomensClothing from './components/WomensClothing';
import AddProduct from './components/AddProduct';
import ExpandItem from './components/ExpandItem';
import ExpandWItem from './components/ExpandWItem';
import About from './components/about';
import Signup from './components/Signup';


const App=()=> {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout/>}>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/addcart" element={<Addcart/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/mens" element={<MensClothing/>}/>
    <Route path="/womens" element={<WomensClothing/>}/>
    <Route path="mens/products/:id" element={<ExpandItem/>}/>
    <Route path="womens/products/:id" element={<ExpandWItem/>}/>
    <Route path="/addproducts" element={<AddProduct/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
      </>
  )
}

export default App;
//Mahesh