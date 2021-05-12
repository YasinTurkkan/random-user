import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";
import './components/Card.css'

function App() {
  const [user, setUser] = useState([]);

  const handleClick = () => {
    fetchData()      
  }

  function fetchData() {
    axios
    .get("https://randomuser.me/api/")
    .then((response) => setUser(response.data.results));
  }
  
  useEffect(() => {
    fetchData()
  }, []);

  // console.log(user);

  return (
    <>
      <div className="App">
        {user?.map((item) => (
          <Card key={item.cell} item={item} />
        ))}
      </div>
      <br />
      <div class="button-container">
        <button onClick={handleClick}>Random User</button>
      </div>
    </>
  );
}

export default App;
