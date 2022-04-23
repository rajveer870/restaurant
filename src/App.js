import './App.css';
import Router from "./Router";
import Footer from './Components/Footer';
import { AuthContextProvider } from "./context/AuthContext";
function App() {
  return (
    <>
    <div className='page'>
      <div className='content'>
        <AuthContextProvider>
            <Router />
        </AuthContextProvider>
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

