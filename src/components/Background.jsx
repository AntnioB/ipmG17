import React from 'react';

export let instance = null;

class Background extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        posBg: '0% 0%',
        posImg: 'center 20%'
      };

      instance = this;
    }
    handleHover(x, y) {
      this.setState({ posBg: x, posImg: y });
    }
    render() {
      return (
        <div>
          <div id="menu-background-pattern" style={{ backgroundPosition: this.state.posBg }}></div>
          <div id="menu-background-image" style={{ backgroundPosition: this.state.posImg }}></div>
        </div>);
    }
  }
export default Background;