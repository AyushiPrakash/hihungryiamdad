import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("Loading...");
  const [timeRemaining, setTimeRemaining] = useState(800);

  useEffect(() => {
    setInterval(() => {
      axios
        .get("https://icanhazdadjoke.com/", {
          headers: {
            Accept: "application/json",
          },
        })
        .then((response) => {
          setJoke(response.data.joke);
          setTimeRemaining(800);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 8000);

    setInterval(() => {
      setTimeRemaining((time) => {
        if (time <= 0) {
          return 800;
        } else return time - 1;
      }); //updating the state using its own current value
    }, 10);
  }, []);

  return (
    <div className="App">
      <div>{joke}</div>
      <div
        className="progressBar"
        style={{ width: `${((800 - timeRemaining) / 800) * 100}%` }}
      ></div>
    </div>
  );
}

export default App;
