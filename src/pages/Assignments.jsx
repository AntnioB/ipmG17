import React from 'react';
import '../Test.css';
import { Link } from 'react-router-dom'
import {instance as BackgroundInstance} from '../components/Background';
import a1A from '../pdfs/GoodandBadUI.pdf'
import a1D from '../pdfs/GoodBadDesign_DanielCAvalheiro.pdf'
import a1I from '../pdfs/Assignement1_Ines.pdf'

function Assignments() {
    return (
        <div id="menu">
            <div id="menu-items">
                <Link className='menu-item' to={a1A} target={a1A} onMouseOver={() => BackgroundInstance.handleHover('0% -25%', 'center 25%')}>Good and Bad UI - António</Link>
                <Link className='menu-item' to={a1D} target={a1D} onMouseOver={() => BackgroundInstance.handleHover('0% -50%', 'center 50%')}>Good and Bad UI - Daniel</Link>
                <Link className='menu-item' to={a1I} target={a1I} onMouseOver={() => BackgroundInstance.handleHover('0% -75%', 'center 75%')}>Good and Bad UI - Inês</Link>
            </div>
        </div>
    );
}

export default Assignments;