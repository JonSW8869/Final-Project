import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <h1>Welcome to the app! Click on an episode above.</h1>
      <nav>
        <ul>
          <li>
            <Link to="/episode/1">Episode 1</Link>
          </li>
          <li>
            <Link to="/episode/2">Episode 2</Link>
          </li>
          {/* Add more links for other episodes */}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
