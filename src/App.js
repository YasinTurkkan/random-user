import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";

function App() {
  const [user, setUser] = useState([]);
  
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => setUser(response.data.results));
  }, []);

  // console.log(user);

  return (
    <div className="App">
      {user?.map((item) => (
        <Card key={item.cell} item={item} />
      ))}
    </div>
  );
}

export default App;
