import React from 'react'
import { useEffect } from 'react'
import axios from 'axios';

const Favourites = () => {
  const headers={
    id:localStorage.getItem("id"),
    authorization:`Bearer ${localStorage.getItem("token")}`,
  };
  useEffect(()=>{
    const fetch=async()=>{
      const response=await axios.get("http://localhost:1000/api/v1//get-fav-books",{headers});
      console.log(response.data.data);
    };
    fetch();
    
  },[]);
  return <div>Favourites</div>
  
};

export default Favourites;