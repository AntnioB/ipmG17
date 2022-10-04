import React, { Component } from 'react';


class Footbar extends Component {
    constructor(props){
        super(props);
    }
    render() { 
        return (
            <header className='navbar'>
                <div className='footbar__main'>COPYRIGHT © PoolT IPM (2018)</div>     
                <div className='navbar__item'> Idk </div>  
            </header>
        );
    }
}
 
export default Footbar;