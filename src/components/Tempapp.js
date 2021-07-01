
import React from "react";
import { useState,useEffect } from "react";

function Tempapp() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");
  useEffect(()=>{
    const fetchApi=async ()=>{
      const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=772fd5127fab23e6297b43dc79f3c396`;
      const response=await fetch(url);
      const responseJson=await response.json();
      //console.log(responseJson.main);
      setCity(responseJson.main)
    }
    fetchApi();
  },[search])

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="mt-4 text-info">Weather</h1>
      </header> 

       <div className="container">
         <div className="row">
           <div className="col-md"></div>
           <div className="col-md">
           <div className="form-group">
          <label htmlFor="City: "></label>
          <input type="search" name="search" className="form-control" placeholder="Enter city name"
            onChange={(event)=>{setSearch(event.target.value)}}
           />
        </div>
           </div>
           <div className="col-md"></div>
         </div>
       </div>
       {!city ?(
         <p>Data not found</p>
       ):(
         <>
         <h2>{search}</h2>
         <h3 className="text-success">{city.temp}&deg;C</h3>
          <div>Minimum Temperature: {city.temp_min}&deg;C</div>
          <div>Maximum Temperature: {city.temp_max}&deg;C</div>
         </>
       )    
       }
      
    </div>
  );
}

export default Tempapp;
