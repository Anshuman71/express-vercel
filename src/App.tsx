import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Express + Vite + React + Static</h1>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <p style={{ textAlign: "center", marginBlock: 20 }}>
        This project serves as an example for deploying to Vercel. For more
        information, see{" "}
        <a href="https://github.com/Anshuman71/express-vercel">
          GitHub repository
        </a>
        .
      </p>
      <div>
        <a href="/about">About page</a>
        <br />
        <br />
        <a href="https://rrv7.vercel.app">Test CORS</a>
      </div>
      <br />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
