import React,{useState} from 'react';
import PropTypes from 'prop-types'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useHistory} from 'react-router-dom';
import './Signin.css';
import axios from "axios";

const Signin = ()=>{
  const history= useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login=async()=>{
    try {
      const loginData = {
        email,
        password,
      };

      // await axios.post("http://localhost:5000/auth/login", loginData);
      await axios.post(
        "http://localhost:5000/login",
        loginData
      ).then(res =>{
             alert(res.data.message)
            //  setLoginUser(res.data.user)
            const data = res.data.message;
            return data;
           })
      
      
    } catch (err) {
      console.error(err);
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();
    login().then(()=>history.push("/Service"))
 
  }

    return(
        <>
        <div className='image3'></div>
        <div className="Container">
        <div className="Login">
            <Form onSubmit={handleSubmit} className="form">
              <div className="title_container">
                  <h2>Login</h2>
              </div>
                <label htmlFor="Email" className='form_label'>Email</label>
                   
                     <input type='text'name="email" id="Email" placeholder='Enter your Email' className="form_field"
                     onChange={(e) => setEmail(e.target.value)}
                     value={email}
                    />
                   
            
                   <label htmlFor="password" className="form_label">Password</label>
                    <input type="password"name="password" placeholder="Password" id="password" className='form_field'
                     onChange={(e) => setPassword(e.target.value)}
                     value={password}
                    />
                    
                
                <Button  size="lg" className="btn2"type="submit" >Login</Button>

                <hr></hr>
                 <div className="social">
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
// Signin.propTypes ={
// setToken:PropTypes.func.isRequired
// };
export default Signin;
