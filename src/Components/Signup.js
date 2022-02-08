import React ,{useState} from 'react';
import './Signup.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Signup =() =>{
  
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:"",
    })
    const handleChange=    e =>{
        const{name,value} = e.target
        setUser({
            ...user,
        [name]:value
        })
    }
    const register=()=>{
        const{name,email,password,reEnterPassword}=user
        if(name && email && password && (password ===reEnterPassword)){
            axios.post("http://localhost:5000/register",user)
            .then(res =>{
                alert(res.data.message)
            })
        }else{
            alert("Invalid input")
        }
    }

    return(
        <>
        <div className='image4'></div>
        <div className="Container">
            {console.log("User",user)}
          <div className="Signup">
          <Form onSubmit={register}className="form1">
              <div class="title_container">
                  <h2>Register</h2>
              </div>
              <label for="Email" className='form_label'>Email</label>
              <input type="email" name="email" value={user.email} placeholder="Email" className='form_field' onChange={handleChange}  />
              <label for="UserName" classname='form_label'>UserName</label>
              <input type="text" name="name" value={user.name} placeholder="UserName" className='form_field' onChange={handleChange} />
              <label for="password" className='form_label'>Password</label>
              <input type="password" name="password" value={user.password} placeholder="Password" className='form_field' onChange={handleChange} />
              <label for="reEnterPassword" className='form_label'>Confirm Password</label>
           <input type="password" name="reEnterPassword"value={user.reEnterPassword} placeholder="reEnterPassword" className='form_field' onChange={handleChange}/>
        
              <Button block size="lg" className="btn1"type="submit" /*disabled={!validateForm()}*/ >Register</Button>

          </Form>
                  
              </div></div>
            
        </>
    );
};
export default Signup