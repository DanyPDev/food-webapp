import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import EasterEgg from './components/EasterEgg/EasterEgg';
import RecipeSearch from './components/RecipeSearch/RecipeSearch';
import Footer from './components/Footer/Footer';

/* the API fetching code is in the RecipeSearch.js file, nested in the components folder */

function App() {



  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipesearch" element={<RecipeSearch />} />
        <Route path="/easteregg" element={<EasterEgg />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
