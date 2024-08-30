import React from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";

const BookCard = ({data,favourite}) => {
  const headers={
    id:localStorage.getItem("id"),
    authorization:`Bearer ${localStorage.getItem("token")}`,
    bookid:data._id,
  };
  const handleRemovebook=async()=>{
    const response=await axios.put("http://localhost:1000/api/v1/remove-book-from-fav",{},
      {headers}
    );
    alert(response.data.message);
    

  };
    
  return (
    <div className='bg-zinc-800 rounded p-4 flex flex-col'>
   <Link to ={`/view-book-details/${data._id}`}>
   
   <div className='bg-zinc-800 rounded border border-yellow-100 p-2 flex flex-col '>
     <div className='bg-zinc-900 rounded flex items-center justify-center'>
      <img src={data.url} alt='/' className='h-[28vh]'/>
     </div>
     <h2 className='mt-4 text-xl text-zinc-200 font-semibold'>{data.title}</h2>
     <p className='mt-2 text-zinc-400 font-semibold '>by {data.author}</p>
     <p className='mt-2 text-zinc-200 font-semibold '> Rs. {data.price}</p>
      </div>
    </Link>
    {favourite && (
    <button 
      className='bg-zinc-500  px-4 py-2 rounded border border-yellow-500 text-black hover:bg-blue-200  mt-4' 
      onClick={handleRemovebook}>
      Remove from Favourites
      </button>
    )}
    </div>
  
  );
  
};

export default BookCard