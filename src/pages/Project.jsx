import React from 'react';
import '../Test.css';
import { Link } from "react-router-dom";
import {instance as BackgroundInstance} from '../components/Background';
import stage1 from '../pdfs/Stage1.pdf';
import stage2 from '../pdfs/Stage2.pdf';
import stage3 from '../pdfs/Stage3.pdf';
import stage4 from '../pdfs/Stage4.pdf';
import stage5 from '../pdfs/Stage5.pdf';
import stage5_feedback from '../pdfs/Feedback_Ana.pdf';
import stage6 from '../pdfs/Stage6.pdf';

function Project() {
    return (
        <div id="menu">
            <div id="menu-items">
                <Link className='menu-item' to={stage1} target={stage1} onMouseOver={() => BackgroundInstance.handleHover('0% -10%', 'center 10%')}>Stage 1 Report</Link>
                <Link className='menu-item' to={stage2} target={stage2} onMouseOver={() => BackgroundInstance.handleHover('0% -20%', 'center 20%')}>Stage 2 Report</Link>
                <Link className='menu-item' to={stage3} target={stage3} onMouseOver={() => BackgroundInstance.handleHover('0% -30%', 'center 30%')}>Stage 3 Report</Link>
                <Link className='menu-item' to={stage4} target={stage4} onMouseOver={() => BackgroundInstance.handleHover('0% -40%', 'center 40%')}>Stage 4 Report</Link>
                <Link className='menu-item' to={stage5} target={stage5} onMouseOver={() => BackgroundInstance.handleHover('0% -50%', 'center 50%')}>Stage 5 Report</Link>
                <Link className='menu-item' to={stage5_feedback} target={stage5_feedback} onMouseOver={() => BackgroundInstance.handleHover('0% -60%', 'center 70%')}>Stage 5 - Feedback</Link>
                <Link className='menu-item' to={stage6} target={stage6} onMouseOver={() => BackgroundInstance.handleHover('0% -80%', 'center 80%')}>Stage 6 Report</Link>
            </div>
        </div>
    );
}

export default Project;