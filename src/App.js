import Navbar from "./components/Navbar";
import React from 'react';

const App = () => {
  return (
    <div className="App">
      <Navbar /> 
      <div className="content home">
        <h1 className="home-title">Formula 1 Unofficial&trade;<hr /></h1>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/1280px-F1.svg.png' alt="f1 logo"/>
      </div>
    </div>
  );
}

export default App;
