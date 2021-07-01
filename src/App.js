import logo from './logo.svg';
import './App.css';
import React from "react";
import Tempapp from './components/Tempapp';
import Newsfeed from './components/Newsfeed';
import About from './components/About';
function App() {
  

  return (
    <>
    <div className="App">
          <Tempapp />
    </div>
    <div className="container">
            <h1 className="mb-4 text-info"><i className="fa fa-newspaper" aria-hidden="true"> news feed...</i></h1>
            <Newsfeed />
            <About />
    </div>
    </>
  );
}

export default App;

