import React, { useEffect, useState } from 'react';
import axios from "axios";
import Loader from '../Loader/Loader';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {GrLanguage} from"react-icons/gr";
import { FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";


const ViewDataDetails = () => {
    const {id}=useParams();
    const navigate=useNavigate();
    const [Data,setData]=useState({ url: '' });
    const isLoggedIn= useSelector((state)=>state.auth.isLoggedIn);
    const role= useSelector((state)=>state.auth.role);
    console.log(isLoggedIn);
    console.log(isLoggedIn);
  useEffect(()=>{
      const fetch=async()=>{
          const response=await axios.get(
              `http://localhost:1000/api/v1/get-book-by-id/${id}`
          );
       
          setData(response.data.data|| { url: '' });
      };
      fetch();
  },[ ]);
  const headers={
    id:localStorage.getItem("id"),
    authorization:`Bearer ${localStorage.getItem("token")}`,
    bookid:id,
  };
  
  const handleFavourite=async()=>{
    const response=await axios.put("http://localhost:1000/api/v1/add-book-to-fav",{},{headers});
   alert(response.data.message);
  };
  const handleCart=async()=>{
    const response=await axios.put("http://localhost:1000/api/v1/add-to-cart",{},{headers});
    alert(response.data.message);
  };
  const deleteBook=async()=>{
    const response=await axios.delete("http://localhost:1000/api/v1/delete-book",{headers});
    alert(response.data.message);
    navigate("/all-books");
    
  };

  return (
   <>
    {Data && (<div className='px-4 md:px-8 py-8 bg-zinc-900 flex gap-8 flex flex-col lg:flex-row gap-8 items-start'>
        <div className='px-6  w-full lg:w-3/6 '>
        {" "}
        
        <div className='flex flex-col md:flex-row lg:flex-row  justify-around bg-zinc-800 p-12 rounded '>
        {" "}
        <img src={Data.url} alt='/' className='h-[50vh] md:h-[60vh] lg:h[70vh] w-[40vh] rounded mt-4 '/>
       {isLoggedIn===true && role==="user" &&(
         <div className='flex flex-col md:flex-row lg:flex-col items-center justify-between lg:justify-start mt-8 lg:mt-0 '>
         <button className='bg-white rounded lg:rounded-full text-xl lg:text-2xl p-3 text-red-500 mt-4 flex items-center justify-center' onClick={handleFavourite}><FaHeart />{" "}<span className='ms-4 block lg:hidden '>Add to fav</span></button>
         <button className='bg-white rounded mt-8 md:mt-0 lg:rounded-full text-xl lg:text-2xl p-3  lg:mt-8 text-blue-500 flex items-center justify-center' onClick={handleCart}>
            <FaShoppingCart />{" "}<span className='ms-4 block lg:hidden '>Add to cart</span></button>
     </div>
       )}
        {isLoggedIn===true && role==="admin" &&(
         <div className='flex flex-col md:flex-row lg:flex-col items-center justify-between lg:justify-start mt-8 lg:mt-0 '>
         <Link to={`/updateBook/${id}`} className='bg-white rounded lg:rounded-full text-xl lg:text-2xl p-3 text-red-500 mt-4 flex items-center justify-center'><FaEdit />{" "}<span className='ms-4 block lg:hidden '>Edit</span></Link>
         <button className='bg-red-500 rounded lg:rounded-full text-xl lg:text-2xl p-3 mt-8 md:mt-0 lg:mt-8 text-white flex items-center justify-center'onClick={deleteBook}><MdDeleteOutline />{" "}<span className='ms-4 block lg:hidden '>Delete</span></button>
     </div>
       )}
        </div>
        </div>
        <div className='p-4 w-full lg:w-3/6 mt-10'>
        <h1 className='text-4xl text-zinc-300 font-semibold  lg:text-left'>{Data.title}</h1>
        <p className=' text-zinc-400 mt-1 font-semibold  lg:text-left'>by {Data.author}</p>
        <p className=' text-xl text-zinc-500 mt-4 font-semibold  lg:text-left'>{Data.desc}</p>
        <p className=' flex text-zinc-400 mt-4 font-semibold items-center justify-start'><GrLanguage className='me-3'/>{Data.language}</p>
        <p className=' text-zinc-100 mt-4 text-3xl font-semibold'>Price : Rs.{Data.price}{" "}</p>
        </div>

    </div>)}
    {!Data && (
    <div className='flex items-center justify-center my-8'>
        <Loader/>{" "}
    </div>)}
   </>
  );
};

export default ViewDataDetails;
//'p-4 w-3/6'
//md:w-1/2 space-y-5 mt-4 px-0.5 lg:px-0.1 mx-36 ml-8