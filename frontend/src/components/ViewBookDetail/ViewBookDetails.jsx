import React, { useEffect, useState } from 'react';
import axios from "axios";
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';
import{GrLanguage} from"react-icons/gr";
import { FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";


const ViewDataDetails = () => {
    const {id}=useParams();
    const [Data,setData]=useState({ url: '' });
  useEffect(()=>{
      const fetch=async()=>{
          const response=await axios.get(
              `http://localhost:1000/api/v1/get-book-by-id/${id}`
          );
       
          setData(response.data.data|| { url: '' });
      };
      fetch();
  },[ ]);
  return (
   <>
    {Data && (<div className='px-4 md:px-8 py-8 bg-zinc-900 flex gap-8 flex flex-col md:flex-row gap-8'>
        <div className='bg-zinc-800 rounded px-6 p-12 w-full lg:w-3/6 flex   justify-around'>
        {" "}
        
        <img src={Data.url} alt='/' className='h-[50vh] lg:h-[70vh] rounded mt-4'/>
        <div className='flex md:flex-col mt-5'>
            <button className='bg-white rounded-full text-2xl p-2 '><FaHeart /></button>
            <button className='bg-white rounded-full text-2xl p-2 mt-6'><FaShoppingCart /></button>
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