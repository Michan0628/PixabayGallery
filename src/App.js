import React, { useState, useEffect } from "react";
import Card from "./Component/Card";
import "./App.css";
import Axios from "axios";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    Axios.get(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => {
        setImages(res.data.hits);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div className="App container">
      
      <Card />
    </div>
  );
}

export default App;
