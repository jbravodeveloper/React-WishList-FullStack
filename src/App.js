import React from "react";
import WishList from "./componentes/WishList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>WishList App</h1>
      </header>
      <main>
        <WishList />
      </main>
    </div>
  );
}

export default App;
