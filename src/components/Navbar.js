import React, { Component } from 'react';


class Navbar extends Component {
    constructor(props){
        super(props);
    }
    render() { 
        return (
            <header className='navbar'>
                <div className='navbar__title navbar__item'>IPM G17</div>
                <div className='navbar__item'>Home</div>
                <div className='navbar__item'>About</div>
                <div className='navbar__item'>Assignents</div>
                <div className='navbar__item'>Project</div>          
            </header>
        );
    }
}
 
export default Navbar;