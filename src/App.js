import Navbar from "./components/Navbar";
import f1Logo from './styles/drivers/f1Logo.jpg'
import React from 'react';

const App = () => {
  return (
    <div className="App">
      <Navbar /> 
      <div className="content home">
        <h1 className="home-title">Formula 1 Unofficial&trade;</h1>
        <img src={f1Logo} alt="f1 logo"/>
      </div>
    </div>
  );
}

export default App;
