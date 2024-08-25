import React, { useEffect, useState } from 'react';
import axios from "axios";
import Loader from '../components/Loader/Loader';
import BookCard from '../components/BookCard/BookCard';
const Allbooks = () => { 
  const [Data,setData]=useState();
  useEffect(()=>{
      const fetch=async()=>{
          const response=await axios.get(
              "http://localhost:1000/api/v1/get-all-book"
          );
          setData(response.data.data);
      };
      fetch();
  },[ ]);
  return (
    <div className='bg-zinc-900 px-12 h-auto py-8'>
      {" "}
    <h4 className='text-3xl text-yellow-50'>All Books</h4>
    {!Data && (
    <div className='flex items-center justify-center my-8'>
        <Loader/>{" "}
    </div>
    )}
    <div className='my-12 px-12 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8'>
        
        {Data && 
        Data.map((items,i)=>(
        <div key={i}>
            <BookCard data={items}/>{" "}
        </div>))}
    </div></div>
  )
}

export default Allbooks