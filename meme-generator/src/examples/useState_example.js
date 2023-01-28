import React, {useState} from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";

export default function App() {
  const [things, setThings] = useState(["Thing 1", "Thing 2"]);

  
  function addItem () {
    const newThingsText = `Thing ${things.length + 1}`;
    setThings(prevState => [...prevState, newThingsText]);
  }
  const thingsElements = things.map(thing => <p key={thing}>{thing}</p>);
  console.log(thingsElements);

  return (
      <div>
          <Header />
          <Meme />
          <button onClick={addItem}>Click Me</button>
          {thingsElements}
      </div>
  )
}