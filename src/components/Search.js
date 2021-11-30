import React, { useState, useEffect } from "react";
import Character from "./Character";
import Characters from "./Characters";

/* where put the filter?


const Search = ({Characters, onFilter, ...props}) => {
    return (
        <Characters {...props}/> 
        <div>
            <input type="text" placeholder="Search" />
            onChange={(event)=> onFilter(event.target.value)}
        </div>
    )
}
*/
/*
const Search = () => {
    return (
      <div>
            <input type="text" placeholder="Search" />
            {Characters.map((val, key) =>
                return {

                }
            )
            
            }
      </div>
    );
}
*/

/*
function filterCharacters(characters, character) {
  
  const filteredData = characters.filter((character) => {
    return ==
  });
  
useEffect(() => {
    const filteredCharacter = characters.filter((character) =>
        character.search.includes(searchTerm));
    
    }
 [SearchTerm])

*/

const handleChange = (e) => {
  setSearchTerm(e.target.value);
};
return (
  <div>
    <InputGroup size="sm" className="mb-3">
      <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
      <FormControl
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
        value={searchTerm}
        onChange={handleChange}
      />
    </InputGroup>

    {characters &&
      characters
        .filter((character) => {
          console.log(`character`, character);
          return character.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        })
        .map((character) => (
          <Character key={character.id} character={character} />
        ))}
  </div>
);
