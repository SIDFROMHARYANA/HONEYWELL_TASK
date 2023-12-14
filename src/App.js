  
   import React, { useState, useEffect } from "react";
   import Map from "./components/Map";
   import PathFinder from "./components/Pathfinder";
   import axios from "axios";



function App() {
    const [cities, setCities] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("https://gist.githubusercontent.com/dastagirkhan/00a6f6e32425e0944241/raw/33ca4e2b19695b2b93f490848314268ed5519894/gistfile1.json");
          setCities(response.data);
        } catch (error) {
          console.error("Error fetching cities:", error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div className="App">
        <h1> Path Finder of cities</h1>
        <PathFinder cities={cities} />
        <Map cities={cities} />
      </div>
    );
  }
  
  export default App;