import { useState, useEffect } from "react";
import { Character } from "./Character";

export function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character?page=`
      );
      const { results } = await data.json();
      setCharacters(results);
    }
    fetchData();
  }, []);

  return (
    <div className="bg-black pr-10">
      <div className="grid grid-cols-4 gap-4">
        {characters.map((character) => (
          <div className="" key={character.id}>
            <Character
              key={character.id}
              name={character.name}
              origin={character.origin}
              image={character.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
