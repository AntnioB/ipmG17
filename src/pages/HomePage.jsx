import '../Test.css';
import React from 'react';
import { Link } from "react-router-dom";
import {instance as BackgroundInstance} from '../components/Background';

function HomePage() {
    return (
        <div id="menu">
            <div id="menu-items">
                <Link className='menu-item' to="/assignments" onMouseOver={() => BackgroundInstance.handleHover('0% -25%', 'center 25%')}>Assignments</Link>
                <Link className='menu-item' to="/project" onMouseOver={() => BackgroundInstance.handleHover('0% -50%', 'center 50%')}>Project Reports</Link>
                <Link className='menu-item' to="/projectEvolution" onMouseOver={() => BackgroundInstance.handleHover('0% -50%', 'center 50%')}>Project Evolution</Link>
                <Link className='menu-item' to="/aboutUs" onMouseOver={() => BackgroundInstance.handleHover('0% -75%', 'center 75%')}>About Us</Link>
            </div>
        </div>


    );
}


export default HomePage;