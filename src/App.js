import './App.css';
import axios from 'axios';
import { useState,useEffect } from 'react';
import Cardd from './Cards';



function App() {
//const [data,setData]=useState([])

  //useEffect(()=>{
//axios.get('')
//.then(res => console.log(res.data) )
//.catch((err)=>console.log(err))
 // },[])

 const [data,setData]=useState([]);

 
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
     .then(res => {setData(res.data)
    console.log(res.data)})
  },[])




  return (
    <div className="App"  style={{ display:'flex', flexWrap:'wrap',justifyContent:'space-between'   }}>
      <h1>
        Firas Eljed
{/*data.map((e)=> (<ul> <li>  {e.title} </li>  </ul>))*/}
</h1>
  {data.map((el)=> (<Cardd data={el} />) )}

    </div>
  );
}

export default App;
