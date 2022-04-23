import React, { useContext } from "react";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contactus';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Service from './Components/Service';
import Home from './Components/index';
import Error from './Components/Error';
import Navbar  from './Components/Navbar';
import AuthContext from "./context/AuthContext";

function Router(){
    const { loggedIn } = useContext(AuthContext);
    return (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}/>
            {loggedIn === false && (
              <>
                <Route path="/Signup" component={Signup}/>
                <Route path="/Signin" component={Signin}/>
              </>
            )}
            {loggedIn === true && (
              <>
            <Route path="/About" component={About}/>
            <Route path="/Service" component={Service}/>
            <Route path="/Contact" component={Contact}/>
              </>
            )}
          </Switch>
        </BrowserRouter>
      );
}
export default Router;