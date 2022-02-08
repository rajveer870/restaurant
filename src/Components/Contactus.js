import React from 'react';
import Form from "react-bootstrap/Form";
import './contact.css';
const Contact = () => {
    return(
        <>
            <div className='contact-container'>
                <div className='left-col'>
                    <div className='image5'></div>
                </div>
                <div className='right-col'>
                 
                    <p>Please Review Our Services...</p>
                    <Form id="contact-form" method="post">
                           <h1>Contact us</h1>
                        <label for='name' className='form-label1'>Full name</label>
                        <input type="text" id="name" name="name" className="form-field1"placeholder='Your Full name' required/>
                        <label for="email"className='form-label1' >Email Address</label>
                        <input type="email" id="email" name="email" className="form-field1"placeholder='Your Email Address' required/>
                        <label for="message" className="form-label1">Message</label>
                        <textarea rows="6" placeholder="your Message" id="message" name="message" className="form-field2" required/>
                        <button type='submit' className="btn5" name='submit'>Submit</button>
                    </Form>
                    <div id="error"></div>
                    <div id="success-msg"></div>
                </div>
            </div>
        </>
    )
}
export default Contact;