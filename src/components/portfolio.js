import React from 'react';
//import Item from './components/Item';
import {Link} from 'react-router-dom';

const Portfolio=()=>
(
    <div>
    <h1 style={{fontSize:'2em'}}>MY WORK</h1>
    <p>checkout the following things i have done:</p>
    <ul>
     <li><Link to="/portfolio/1">Item1</Link></li>
     <li><Link to="/portfolio/2">Item2</Link></li>
    </ul>
    </div>
)
export default Portfolio;