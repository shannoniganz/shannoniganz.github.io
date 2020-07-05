import React from 'react';
import logo from './MainaPic.PNG';
import './App.css';
import pic1 from './Capture.PNG'
import pic2 from './Amazing1.PNG'
import pic3 from './Amazing 2.PNG'
import pic4 from './Amazing 3.PNG'
import pic5 from './Amazing 4.PNG'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Shannaniganz beauty guru
        </p>       
        <p> email me to book @ strantran@gmail.com!</p>
      </header>
      <br/>
      <div className = "pics">
        <img src={pic1} />
        <p> My foundation skills </p>
        <br/>
        <img src={pic2} />
        <p> Sleepy moon and sweet dreams look </p>
        <br/>
        <img src={pic3} />
        <p> Happy holloween and dia de los murtos! </p>
        <br/>
        <img src={pic4} />
        <p> Laughing at all the bony jokes! </p>
        <br/>
        <img src={pic5} />
        <p> Looking like a gift to the world </p>
      </div>

      <div className = "end">
        <a className = "link" 
          href = "https://www.instagram.com/makeupshannoniganz/"> 
          follow my instagram ;) 
        </a>
      </div>
    </div>
  );
}

export default App;
/*
<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
*/