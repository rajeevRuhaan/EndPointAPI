import React, { useState } from "react";
import "./App.css";
import RegisterForm from "./components/RegisterForm";
import EndPoint from "./components/EndPoint";

function App() {
  const [token, setToken] = useState("");
  return (
    <div className="App">
      {!token ? (
        <RegisterForm setToken={setToken} />
      ) : (
        <EndPoint token={token} />
      )}
    </div>
  );
}

export default App;
