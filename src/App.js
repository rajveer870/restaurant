import './App.css';
import {Route,Switch} from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contactus';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Service from './Components/Service';
import Home from './Components/index';
import Error from './Components/Error';
import Navbar  from './Components/Navbar';
import Footer from './Components/Footer';

//import Button from './containers/Buttoncontainers';
//import Fooditem from './containers/fooditemcontainer';
//import p1 from '../../restaurant/src/Components/assests/1.jpg';
//import p2 from '../../restaurant/src/Components/assests/2.jpg';
//import p3 from '../../restaurant/src/Components/assests/3.jpg';
//import p4 from '../../restaurant/src/Components/assests/4.jpg';
//import p5 from '../../restaurant/src/Components/assests/5.jpg';
//import p6 from '../../restaurant/src/Components/assests/6.jpg';
//import Search from  './Components/Search';

function App() {
  return (
    <>
    <div className='page'>
      <div className='content'>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/About" component={About}/>
      <Route path="/Service" component={Service}/>
      <Route path="/Contact" component={Contact}/>
      <Route path="/Signup" component={Signup}/>
      <Route path="/Signin" component={Signin}/>
      <Route  component={Error}/>
      </Switch>
      </div>
      <Footer/>
   </div>
{/*    <div>
      <div className="image">
        <h1>DELICIEUX FOOD RESTAURANT</h1>
        <p className="dark">Goodbye junk food. Hello super healthy meals.</p>
        <div class="row py-3">
           <Search/>
        </div>
        
          <div className="row">
             <div className='fooditems'>
               <Fooditem img={p1}/>
               <Fooditem img={p2}/>
               <Fooditem img={p3}/>
               <Fooditem img={p4}/>
               <Fooditem img={p5}/>
               <Fooditem img={p6}/>
             </div>
          </div>
          <div className="row">
             <div className="button">
                <Button value="I’m hungry"/>
               <Button value="Show me more"/>
             </div>
          </div>
      </div>
</div>*/}
    </>
  );
}

export default App;

