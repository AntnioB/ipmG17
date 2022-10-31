import './Test.css';
import React from 'react';
import stage1 from './pdfs/Stage1.pdf';
import stage2 from './pdfs/Stage2.pdf';
import stage3 from './pdfs/Stage3.pdf';
import a1 from './pdfs/GoodandBadUI.pdf';
import a2 from './pdfs/GoodBadDesign_DanielCAvalheiro.pdf'

function Test() {
  return(
    <Menu></Menu>
  );
}


class Link extends React.Component{
  render() {
    return <a 
    className="menu-item"
    href={this.props.href}
    target="_blank"
    rel="noopener noreferrer"
    {...this.props}
    >
      {this.props.name}
    </a>;
  }
}

class Menu extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      posBg: '0% 0%',
      posImg: 'center 20%'
    };
  }
  handleHover(x, y){
    this.setState({posBg: x, posImg: y});
  }
  render(){
    return(<div id="menu">
    <div id="menu-items">
      <Link href={a1} name="Good and Bad Design - Antonio" onMouseOver={() => this.handleHover('0% -0%','center 0%')}></Link>
      <Link href={a2} name="Good and Bad Design - Daniel" onMouseOver={() => this.handleHover('0% -25%','center 20%')}></Link>
      <Link href={stage1} name="Stage 1 Report" onMouseOver={() => this.handleHover('0% -50%', 'center 40%')}></Link>
      <Link href={stage2} name="Stage 2 Report" onMouseOver={() => this.handleHover('0% -75%', 'center 60%')}></Link>
      <Link href={stage3} name="Stage 3 Report" onMouseOver={() => this.handleHover('0% -100%', 'center 80%')}></Link>
    </div>
    <div id="menu-background-pattern" style={{backgroundPosition: this.state.posBg}}></div>
    <div id="menu-background-image"style={{backgroundPosition: this.state.posImg}}></div>
  </div>);
  }
}

export default Test;