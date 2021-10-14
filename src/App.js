import './App.css';
import Button from './containers/Buttoncontainers';
import Fooditem from './containers/fooditemcontainer';
import p1 from '../../restaurant/src/Components/assests/1.jpg';
import p2 from '../../restaurant/src/Components/assests/2.jpg';
import p3 from '../../restaurant/src/Components/assests/3.jpg';
import p4 from '../../restaurant/src/Components/assests/4.jpg';
import p5 from '../../restaurant/src/Components/assests/5.jpg';
import p6 from '../../restaurant/src/Components/assests/6.jpg';
function App() {
  return (
    <div>
      <div className="image">
        <h1>DELICIEUX FOOD RESTAURANT</h1>
        <p className="dark">Goodbye junk food. Hello super healthy meals.</p>
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
    </div>
  );
}

export default App;
