import React from 'react';
import { NavLink } from 'react-router-dom';

import { FiHome, FiUser } from 'react-icons/fi';
import { RiGasStationLine} from 'react-icons/ri';

import './footer.css';

export default ()=>{
  return (
    <footer>
      <nav>
        <ul>
          <li><NavLink to="/recuperacion" ><FiHome size="2em"/></NavLink></li>
          <li><NavLink to="/login"><FiUser size="2em"/></NavLink></li>
          <li><NavLink to="/signup"><RiGasStationLine size="2em"/></NavLink></li>
        </ul>
      </nav>
    </footer>
  );
}