import React, { useState, useEffect } from "react";
import Card from "./Component/Card";
import "./App.scss";
import Axios from "axios";
import ImageSearch from "./Component/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("cat");

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
  }, [term]);
  return (
    <div className="App">
      <ImageSearch searchText={(text) => setTerm(text)} />
      {/* loading */}
      {! isLoading && images.length === 0 && <h1>No images found...</h1>}

      {/* render image */}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container">
          {images.map((image) => (
            <Card key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
