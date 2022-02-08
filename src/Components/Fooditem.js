import React from 'react'
import './Fooditem.css';
const Fooditem = (props) => {
    console.log(props)
    return (
        
        <div className="cards">
           <div className="image">
                <img src={props.img} alt='' />
           </div>
           <div className="title">
                <h1>{props.title}</h1>
           </div>
           <div className="des">
              <p>{props.desc} </p>
                <button className='btn3'>Add Item</button>
            </div>
        </div>
    )
}

export default Fooditem
