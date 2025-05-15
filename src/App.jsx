import React from "react";
import "./index.css";

function App() {
  const [isGreet, setGreet] = React.useState(0);

  return (
    <div>
      <div class="container">
        <button
          onClick={() => {
            setGreet((set) => set - 1);
            if (isGreet == 0) {
              setGreet(0);
            }
          }}
        >
          -
        </button>
        <h1>{isGreet}</h1>
        <button
          onClick={() => {
            if (isGreet < 10) {
              setGreet((set) => set + 1);
            }
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
