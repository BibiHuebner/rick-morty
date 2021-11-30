import React, { useState, useEffect } from "react";
import "./App.css";
import Character from "./components/Character";
import Nav from "./components/Nav";
import Modal from "./components/Modal";

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const fetchMyData = () => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(`data`, data);
        setCharacters(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(`error`, error);
      });
  };
  useEffect(() => {
    fetchMyData();
  }, []); //parentheses empty: function should only run once at the beginning
  const cardContainerStyle = {
    //backgroundImage: "",
    backgroundColor: "aquamarine",
    display: "flex",
    //flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    height: "100%",
    minHeight: "100vh",
  };
  return (
    <div className="App background">
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          character={selectedCharacter}
        />
      )}
      <Nav onSearchChange={(search) => setSearchTerm(search)} />

      <div style={cardContainerStyle}>
        {characters.length === 0 || !characters ? (
          <h1> no characters </h1>
        ) : null}

        {characters
          .filter((character) => {
            console.log(`character`, character);
            return character.name
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
          })
          .map((character) => {
            return (
              <Character
                key={character.id}
                character={character}
                onLearnMore={() => {
                  setSelectedCharacter(character);
                  setShowModal(true);
                }}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
