import React,{useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './Signin.css';
import axios from "axios";

const Signin = () => {
  //  const [email,setEmail]=useState("");
    //const[password,setPassword]=useState("");
   //const validateForm=()=>{
     //   return email.length > 0 && password.length > 0;
   // }
   const [user,setUser]=useState({
    email:"",
    password:"" 
   })
   const sign=()=>{
    axios.post("http://localhost:5000/login",user)
    .then (res=>{
      alert(res.data.message)
   //   setLoginUser(res.data.user)
    })
   }
   const handleChange = e =>{
     const{name,value}=e.target
     setUser({
       ...user,
       [name]:value
     })
   }
   const handleSubmit=(event)=>{
        event.preventDefault();
    }
    return(
        <>
        <div className='image3'></div>
        <div className="Container">
        <div className="Login">
            <Form onSubmit={sign}className="form">
              <div class="title_container">
                  <h2>Login</h2>
              </div>
                <label for="Email" className='form_label'>Email</label>
                   
                     <input type='text' id="Email" placeholder='username' className="form_field"
                  //  onChange={(e) =>setEmail(e.target.value)}
                  onChamge={handleChange}
                    />
                   
            
                   <label for="password" className="form_label">Password</label>
                    <input type="password" placeholder="Password" id="password" className='form_field'
                  //  onChange={(e) => setPassword(e.target.Value)}
                  onChange={handleChange}
                    />
                    
                
                <Button block size="lg" className="btn2"type="submit" /*disabled={!validateForm()}*/ >Login</Button>

                <hr></hr>
                 <div class="social">
          <div className="go">
              <button className='btn4'>Login With Google</button></div>
          <div className="fb">
          
              <button className='btn4'>Login with Facebook</button> </div>
        </div> 
             </Form>
            </div>
        </div>
        </>
    );
};
export default Signin;