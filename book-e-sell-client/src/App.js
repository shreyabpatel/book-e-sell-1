import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Editproduct from './components/Editproduct';
import Addproduct from './components/Addproduct';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Searchbar from './components/Searchbar';
import Cart from './components/Cart';
import Productlist from './components/Productlist';
import Footer from './components/Footer';
import {BrowserRouter as Router,Switch,Route, Routes} from 'react-router-dom';
function App() {
  return (
    
    // <Editproduct/>
      // <Cart/> 
    // <Navbar/>
    // <Login/>  
    //   <Register/>
   
    // <Navbar/>
    
   
    //   <Footer/> */}
    // 
    <Router>
      <Navbar/>
      
      <Searchbar/>
      
      {/* <Box style={{marginTop: 64}}> */}
      <Routes>
      <Route exact path='/' element={<Login/>} />
      <Route exact path='/register' element={<Register/>} />
      <Route exact path='/create' element={<CreateView/>} />
      <Route exact path='/update' element={<UpdateView/>} />
      <Route exact path='/cart' element={<Cart/>} />  
      <Route exact path='/addproduct' element={<Addproduct/>} />
      </Routes> 
      
      <Footer/>
    </Router>
  )
}

export default App;
