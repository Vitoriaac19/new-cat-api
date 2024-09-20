import React, { useState, useEffect } from "react";
import "primeicons/primeicons.css";
import styled from "styled-components";
import { ModalOverlay } from "../Application Form /ModalOverlay";
import { ModalContent } from "../Application Form /ModalContent";
import { StyledInput } from "../Application Form /StyledInput";
import { StyledButton } from "../Application Form /StyledButton";

function Cats({ className }) {
  const [cats, setCats] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedCat, setSelectedCat] = useState(null);

  const fetchCats = () => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=60", {
      method: "GET",
      headers: {
        "x-api-key":
          "live_5gWY3rUVde9PxS83gEBhgSvwNJM6YGDwwbeHCcPQQRmea8MxbzpQtEpcT32l6tt8",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        const catsWithFavorite = result.map((cat) => ({
          ...cat,
          isFavorite: false,
        }));
        setCats(catsWithFavorite);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchCats();
  }, []);

  function handleHeartClick(id) {
    setCats((prevCats) =>
      prevCats.map((cat) =>
        cat.id === id ? { ...cat, isFavorite: !cat.isFavorite } : cat
      )
    );
  }

  function handleAdopt(cat) {
    setSelectedCat(cat);
    setModal(true);
  }

  function closeModal() {
    setModal(false);
    setSelectedCat(null);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted");
    closeModal();
  }

  return (
    <div className={className}>
      {localStorage.getItem("user") && (
        <div className="container-search">
          <input type="text" placeholder="Search a breed" />
        </div>
      )}
      <div className="container-cats">
        {cats.map((cat) => (
          <div className="cats" key={cat.id}>
            <div className="image">
              <img src={cat.url} alt="cat image" className="container-image" />
            </div>
            <div className="container-adopt"></div>
            {cat.breeds.length > 0 ? (
              <div className="container-informations">
                <span>{cat.breeds[0].name}</span>
              </div>
            ) : (
              <div className="container-informations">
                <span>Unique Cat</span>
              </div>
            )}
            <div className="container-adopt">
              <div className="button">
                <button
                  type="button"
                  className="button-adopt"
                  onClick={() => handleAdopt(cat)}
                >
                  Adopt-me!
                </button>
              </div>
              <div className="heart-icon">
                {cat.isFavorite ? (
                  <i
                    className="pi pi-heart-fill"
                    onClick={() => handleHeartClick(cat.id)}
                  ></i>
                ) : (
                  <i
                    className="pi pi-heart"
                    onClick={() => handleHeartClick(cat.id)}
                  ></i>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {modal && (
        <ModalOverlay>
          <ModalContent>
            <h2>Cat Adoption Application Form</h2>
            <form onSubmit={handleSubmit}>
              <StyledInput type="text" placeholder="Name" required />
              <StyledInput type="text" placeholder="NIF" required />
              <StyledInput type="number" placeholder="Age" required />
              <StyledInput type="text" placeholder="Occupation" required />
              <StyledInput type="tel" placeholder="Telephone Number" required />
              <StyledInput type="text" placeholder="Address" required />
              <StyledButton type="submit">Submit</StyledButton>
              <StyledButton type="button" onClick={closeModal}>
                Cancel
              </StyledButton>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}
    </div>
  );
}

export default Cats;
