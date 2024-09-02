import React,{useEffect,useState} from 'react'
import axios from "axios";
import Loader from "../Loader/Loader";
const Settings = () => {
  const[Value,setValue]=useState({address:""});
  const[ProfileData,setProfileData]=useState();
  const headers={
    id:localStorage.getItem("id"),
    authorization:`Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(()=>{
    const fetch=async()=>{
      const response=await axios.get(
        "http://localhost:1000/api/v1/get-user-information",
        {headers}
      );
      setProfileData(response.data);
      setValue({address:response.data.address});
    };
    fetch();
  },[]);
  return <>
  {!ProfileData && <Loader/>}{" "}
  {ProfileData && (
    <div className='h-[100%] p-0 md:p-4 text-zinc-100'>
      <h1 className='text-3xl md:text-5xl font-semibold text-zinc-500 mb-8'>Settings</h1>
      <div className=''></div>
    </div>
  )}
  </>
  
};

export default Settings