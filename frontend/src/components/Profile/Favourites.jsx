import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import BookCard from "../BookCard/BookCard";


const Favourites = () => {
  const [FavouriteBooks,setFavouriteBooks]=useState([]);
  const headers={
    id:localStorage.getItem("id"),
    authorization:`Bearer ${localStorage.getItem("token")}`,
  };
  useEffect(()=>{
    const fetch=async()=>{
      const response=await axios.get("http://localhost:1000/api/v1/get-fav-books",{headers});
      setFavouriteBooks(response.data.data);
    };
    fetch();
    
  },[FavouriteBooks]);
  return(
    <>
    {FavouriteBooks && FavouriteBooks.length===0 && (
      <div className='flex flex-col text-2xl font-semibold h-[100%] text-zinc-800 flex items-center justify-center w-full bg-zinc-700'>
        <img src='remove.png' className='h-[20vh] my-4'/> 
      <p >No favourite Books</p>
      </div>)}
      
      <div className='grid lg:grid-cols-4 gap-4 my-4 px-4'>
        {FavouriteBooks && FavouriteBooks.map((items,i)=>(
        <div key={i}>
        <BookCard data={items} favourite={true}/>
        </div>
      ))}
      </div>
    </>
  
  );

};

export default Favourites;