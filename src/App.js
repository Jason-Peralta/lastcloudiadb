import React from 'react';
import './App.css';
import TopNav from "./Menu";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopNav />
        <p>
        s t a r t
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
