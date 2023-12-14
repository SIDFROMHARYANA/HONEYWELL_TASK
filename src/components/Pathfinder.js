
import React, { useState, useEffect } from "react";
import axios from "axios";

const PathFinder = ({ cities }) => {
  const [paths, setPaths] = useState([]);
  const [shortestPath, setShortestPath] = useState([]);

  useEffect(() => {
    const fetchPaths = async () => {
      try {
        const response = await axios.post("https://gist.githubusercontent.com/dastagirkhan/00a6f6e32425e0944241/raw/33ca4e2b19695b2b93f490848314268ed5519894/gistfile1.json", { cities });
        setPaths(response.data.paths);
        setShortestPath(response.data.shortestPath);
      } 
      
      catch (error) {
        console.log("Error fetching paths:", error);
      }
    };


    fetchPaths();
  }, [cities]);

  return (
    <div className="path-finder">
      <h2>All Paths</h2>
      <ul>
        {paths.map((path, index) => (
          <li key={index}>{paths}</li>
        ))}
      
      </ul>
      <h2>Shortest Path</h2>
      <p>{shortestPath}</p>
    </div>
  );
};

export default PathFinder;