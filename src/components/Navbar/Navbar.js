import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    /* any elements in navbar is interactive, when user hovers on Home,Search Recipes or Nutritional value, there is an animatiom.
    Furthermore, if the user click on any elements, it redirects them to a specific route */
    return (
        <header>
            <h5 id="home">
                <Link to="/">Home <i class="fas fa-hamburger"></i></Link>
            </h5>
        <nav>
            <ul className='nav-links'>
            <li id="links"><Link to="/recipesearch">Search Recipes</Link></li>
            <li id="links"><Link to="/easteregg">Easter Egg</Link></li>
            </ul>
        </nav>
        </header>
    )
}

export default Navbar;
