import React from 'react';
import '../Test.css';
import { Link } from "react-router-dom";
import {instance as BackgroundInstance} from '../components/Background';
import stage1 from '../pdfs/Stage1.pdf';
import stage2 from '../pdfs/Stage2.pdf';
import stage3 from '../pdfs/Stage3.pdf';

function Project() {
    return (
        <div id="menu">
            <div id="menu-items">
                <Link className='menu-item' to={stage1} target={stage1} onMouseOver={() => BackgroundInstance.handleHover('0% -25%', 'center 25%')}>Stage 1 Report</Link>
                <Link className='menu-item' to={stage2} target={stage2} onMouseOver={() => BackgroundInstance.handleHover('0% -50%', 'center 50%')}>Stage 2 Report</Link>
                <Link className='menu-item' to={stage3} target={stage3} onMouseOver={() => BackgroundInstance.handleHover('0% -75%', 'center 75%')}>Stage 3 Report</Link>
            </div>
        </div>
    );
}

export default Project;