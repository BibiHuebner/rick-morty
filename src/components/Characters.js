import React, { useState, useEffect } from "react";
import Character from "./Character";
import logo from "../assets/Logo.jpeg";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";

const Characters = ({ characters }) => {
  const cardContainer = {
    backgroundImage: "",
    display: "flex",
    //flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  return (
    <div style={cardContainer}>
      {characters.length === 0 || !characters ? <h1> no characters </h1> : null}

      {characters &&
        characters.map((character) => (
          <Character key={character.id} character={character} />
        ))}
    </div>
  );
};

/*
  //async await error: error not defined
  const getMyDataAsync = async () => {
    try {
      const res = await fetch("https://rickandmortyapi.com/api/character/");
      console.log(res);
      const data = await res.json();
        console.log(`data`, data);
        
    } catch (err) {
     console.log(error);
    }
  };
  
  getMyDataAsync();
  const 
  
  */
export default Characters;
