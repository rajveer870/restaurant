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
                <h1>Title name</h1>
           </div>
           <div className="des">
              <p>write your description here.... </p>
                <button>read more</button>
            </div>
        </div>
    )
}

export default Fooditem
