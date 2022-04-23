import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi";
import "./Navbar.css"
const Navbar = () => {
    const[showMediaIcons,setShowMediaIcons] = useState(false);
    return(
       <>
       <div className='title'>
           <h3>DELICIEUX FOOD RESTAURANT</h3>
       </div>
       <nav className='main-nav'> 
       <div className={showMediaIcons ? "menu-link mobile-menu-link":"menu-link"}>
          <ul>
             <li>
                <NavLink exact to="/">Home</NavLink>
             </li>
             <li>
               <NavLink exact to="/About">About</NavLink>
             </li>
             <li>
                <NavLink exact to="/Service">Service</NavLink>
             </li>
              <li>
                <NavLink exact to="/Contact">Contact Us</NavLink>
              </li>
              <li>
                 <NavLink exact to="/Signup">Register</NavLink>
              </li>
              <li>
                 <NavLink exact to="/Signin">Login</NavLink>
              </li>
          </ul>
       </div>
       {/*3rd social media links*/}
           <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://youtube.com/channel/UCwK7cS9n03F6pCbtznPZokQ"
                target="Ak">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/channel/UCwK7cS9n03F6pCbtznPZokQ"
                target="Ak">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/channel/UCwK7cS9n03F6pCbtznPZokQ"
                target="Ak">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>



       {/*hamburget menu start*/}
       <div className='hamburger-menu'>
           <button onClick={() =>setShowMediaIcons(!showMediaIcons)}>
               <GiHamburgerMenu/>
           </button>
        </div>
       </div>
    </nav>
       </>
    );
};
export default Navbar;