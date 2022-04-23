import React, { useEffect, useState } from 'react';
import menu from  './assests/menu.png';
import axios from 'axios';
axios.defaults.withCredentials=true
const Service = () => {
    const [user,setUser]= useState();
    const sendRequest =async()=>{
        const res =await axios.get('http://localhost:5000/login/user',{
            withCredentials:true
        }).catch(err=>console.log(err));
        const data =await res.data;
        return data;
    }
    useEffect(()=>{
       sendRequest().then((data)=>setUser(data.user))
    },[])
    return(
        <>
        {user && <h1>{user.name}</h1>}
        <div>
            <div className="image2">
                   
                      <div className="service">
                          <img src={menu} alt="ggg"/>
                      </div>
                      </div>
        </div>
        </>
    )
}
export default Service;