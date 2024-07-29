import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Button from "./components/Button";
import "./styles.css";

function App() {
  return (
    <div>
      <Header welcome="Shiv React Props Page" />
      <Profile name="Shiv " age={25} bio="Software Developer" />
      <Button label="Click Me" />
    </div>
  );
}

export default App;
