import { useState } from "react";
import Login from "./components/Login";
import Wordle from "./components/Wordle";
import Keyboard from "./components/Keyboard";

function App() {
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");

  const handleKeyPress = (e) => {
    //handlekeypreses
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Login />
      <Wordle guesses={guesses} />
      <Keyboard onKeyPress={handleKeyPress} />
    </div>
  );
}

export default App;
