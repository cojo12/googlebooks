import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Saved from "./pages/Saved/saved";
import Search from "./pages/Search/search"
import Navbar  from "./components/Navbar/navbar";

function App() {
  return(
    <Router>
      <div>
        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route exact path="/saved" component={Saved}/>
        <Route exact path="/search" component={Search}/>
      </div>
    </Router>
  );
}

export default App;
