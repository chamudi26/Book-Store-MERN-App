import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import BookCard from "../BookCard/BookCard";


const Favourites = () => {
  const [FavouriteBooks,setFavouriteBooks]=useState();
  const headers={
    id:localStorage.getItem("id"),
    authorization:`Bearer ${localStorage.getItem("token")}`,
  };
  useEffect(()=>{
    const fetch=async()=>{
      const response=await axios.get("http://localhost:1000/api/v1//get-fav-books",{headers});
      setFavouriteBooks(response.data.data);
    };
    fetch();
    
  },[]);
  return(
  <div>
    {FavouriteBooks && FavouriteBooks.map((items,i)=>(
      <div key={i}>
      <BookCard data={items}/>
      </div>
    ))}
  </div>
  );

};

export default Favourites;