import logo from "./logo.svg";
import "./App.css";
import "./navbar.css";
import { useState } from "react";
function NavBar(params) {
  const [isMobile, setIsMobile] = useState(false);


  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Hello</h1>
      </div>
      <ul className={isMobile? "navbar-links-mobile" : "navbar-links"} onClick={()=>setIsMobile(false)}>
        <li>
          <a href="#home">Home</a>
          <a href="#home">Home</a>
          <a href="#home">Home</a>
          <a href="#home">Home</a>
        </li>
      </ul>
      <button className="mobile-menu-icon" onClick={()=>setIsMobile(!isMobile)}>
        {isMobile ? <>&#10005;</> : <>&#9776;</>}
      </button>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
