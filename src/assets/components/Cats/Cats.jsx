import React, { useState, useEffect } from "react";

function Cats({ className }) {
  const [cats, setCats] = useState([]);

  const fetchCats = () => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=20", {
      method: "GET",
      headers: {
        "x-api-key":
          "live_5gWY3rUVde9PxS83gEBhgSvwNJM6YGDwwbeHCcPQQRmea8MxbzpQtEpcT32l6tt8",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setCats(result);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <div className={className}>
      <div className="container-cats">
        {cats.map((cat) => (
          <div className="cats" key={cat.id}>
            <div className="image">
              <img src={cat.url} alt="cat image" className="container-image" />
            </div>
            {cat.breeds.length > 0 ? (
              <div className="container-informations">
                <span>{cat.breeds[0].name}</span>
              </div>
            ) : (
              <div className="container-informations">
                <span>Unique Cat</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cats;
