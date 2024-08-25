import React, { useEffect } from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import {Routes,Route} from "react-router-dom";
import Allbooks from './pages/Allbooks';
import LogIn from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import ViewBookDetails from './components/ViewBookDetail/ViewBookDetails';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './store/auth';
import Favourites from './components/Profile/Favourites';
import UserOrderHistory from './components/Profile/UserOrderHistory';
import Settings from './components/Profile/Settings';
const App = () => {
  const dispatch=useDispatch();
 // const role=useSelector((state)=>state.auth.role);
  useEffect(()=>{
    if(
      localStorage.getItem("id") &&
      localStorage.getItem("token") &&
      localStorage.getItem("role")
    ){
      dispatch(authActions.login());
      dispatch(authActions.changeRole(localStorage.getItem("role")));
    }
  },[]);
  return (
    <div>
      
        <Navbar/>
        <Routes>
          <Route exact path='/' element={ <Home/>}/>
          <Route  path='/all-books' element={ <Allbooks/>}/>
          <Route  path='/LogIn' element={ <LogIn/>}/>
          <Route  path='/SignUp' element={ <Signup/>}/>
          <Route  path='/Cart' element={ <Cart/>}/>
          <Route  path='/profile' element={ <Profile/>}>
          <Route index element={<Favourites/>}/>
          <Route path="/profile/orderHistory" element={<UserOrderHistory/>}/>
          <Route path="/profile/settings" element={<Settings/>}/>
          </Route>
          <Route path="view-book-details/:id" element={<ViewBookDetails/>}/>
        </Routes><Footer/>
     
      
     
      
    </div>
  );
};

export default App
