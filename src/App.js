import './App.css';
import {Outlet} from "react-router-dom";
import Header from "./Components/Header";
import { useState, useEffect } from "react";

function App() {
  let [data,setData]=useState([]);

  useEffect(()=>{
    const fetchautoparts = async()=>{
      try{
        const response=await fetch("/autoparts.json");
        const da=await response.json();
        setData(da);

        
      }catch(err){}
    };
    fetchautoparts();
  },[])
  console.log(data);
  return (
    <div className="App">
        <Header></Header>
        <Outlet
          context={{
            data
          }}>
        </Outlet>
    </div>
  );
}

export default App;