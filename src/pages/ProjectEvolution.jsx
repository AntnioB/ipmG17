import React from 'react';
import '../Test.css';
import welcomeScreen from '../images/WelcomeScreen.jpg'
import homeScreen from '../images/HomeScreen.jpg'
import cardScreen from '../images/cardScreen.jpg'
import LoginScreen from '../images/LoginScreen.jpg'
import sketchHome from '../images/sketch-home.png'
import sketchLogin from '../images/sketch-login.png'
import sketchProfile from '../images/sketch-profile.png'
import sketchWelcome from '../images/sketch-welcome.png'



function ProjectEvolution() {
    return (
        <div>
            <div id='images'>
                <text className='images-text'>From sketches</text>
                <img id='images-child' src={sketchWelcome}/>
                <img id='images-child' src={sketchLogin}/>
                <img id='images-child' src={sketchHome}/>
                <img id='images-child' src={sketchProfile}/>
            </div>
            <div id='images'>
                <text className='images-text'>To Prototype--</text>
                <img id='images-child' src={welcomeScreen} />
                <img id='images-child' src={LoginScreen} />
                <img id='images-child' src={homeScreen} />
                <img id='images-child' src={cardScreen} />
            </div>
        </div>
    );
}

export default ProjectEvolution;