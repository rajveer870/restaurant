import React,{useState} from 'react';
import Button from '../containers/Buttoncontainers';
import Fooditem from '../containers/fooditemcontainer';
//import p1 from './assests/1.jpg';
//import p2 from './assests/2.jpg';
//import p3 from './assests/3.jpg';
//import p4 from './assests/4.jpg';
//import p5 from './assests/5.jpg';
//import p6 from './assests/6.jpg';
//import Search from  '../Components/Search';
import SearchIcon from '@mui/icons-material/Search';
import data from'./data';



const Home = () => {
 const[filter,setFilter]= useState('');
 const searchText = (event)=>{
     setFilter(event.target.value);
 }
 let dataSearch =data.Card.filter(item=>{
     return Object.keys(item).some(key=>
        item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
 });
 console.warn(filter);
    return(
        
          <div>
             <div className="image">
                   
                      <p className="dark">Goodbye junk food. Hello super healthy meals.</p>
                    

             <div className="row py-3">
                 <div className='Search'>
                 <div className='SearchInput'>
             <input
                  type="text"
                  value={filter}
                  onChange={searchText.bind(this)}
                 />
                 <div className="searchIcon">
                    <SearchIcon/>
                 </div>
                 </div>
                 </div>
             <div className='fooditems'>
                 {dataSearch.map((item,index)=>{
                   return(
                       <Fooditem img={item.img} title={item.title} desc={item.desc}/>
                      )
                      })
                    }
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
};
export default Home;