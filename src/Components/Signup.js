import React ,{useState} from 'react';
import './Signup.css';
import Form from "react-bootstrap/Form";
import {useHistory} from 'react-router-dom';
import Button from "react-bootstrap/Button";
import axios from "axios";

const Signup =() =>{
   const history= useHistory();
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:"",
    })
    const handleChange= e =>{
        const{name,value} = e.target
        setUser({
            ...user,
        [name]:value
        })
    }
    const register=async()=>{
        debugger;
        const{name,email,password,reEnterPassword}=user
         
        alert(name)
        if(name && email && password && (password ===reEnterPassword)){
           await axios.post("http://localhost:5000/register",user)
            .then(res =>{
                alert(res.data.message)
                // alert("OK");
                const data =  res.data.message;

                console.log(res.data.message);
                console.log(res.status);
                return data;
            }).catch(e=>{
                console.log(e.message);
            });
            
        }else{
            alert("Invalid input")
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        //send http request
        register().then(()=>history.push("/Signin"));

    }
  
    return(
        <>
        <div className='image4'></div>
        <div className="Container">
            {console.log("User",user)}
          <div className="Signup">
          <Form onSubmit={handleSubmit} className="form1">
              <div className="title_container">
                  <h2>Register</h2>
              </div>
              <label htmlFor="Email" className='form_label'>Email</label>
              <input type="email" name="email" value={user.email} placeholder="Email" className='form_field' onChange={handleChange}  />
              <label htmlFor="UserName" className='form_label'>UserName</label>
              <input type="text" name="name" value={user.name} placeholder="UserName" className='form_field' onChange={handleChange} />
              <label htmlFor="password" className='form_label'>Password</label>
              <input type="password" name="password" value={user.password} placeholder="Password" className='form_field' onChange={handleChange} />
              <label htmlFor="reEnterPassword" className='form_label'>Confirm Password</label>
           <input type="password" name="reEnterPassword"value={user.reEnterPassword} placeholder="reEnterPassword" className='form_field' onChange={handleChange}/>
        
              <Button size="lg" className="btn1" type="submit" /*disabled={!validateForm()}*/ >Register</Button>

          </Form>
                  
              </div></div>
            
        </>
    );
};
export default Signup