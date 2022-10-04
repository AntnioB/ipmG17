import React,{Component} from "react";
import "../App.css";

class Link extends Component {
    constructor(props){super(props)}

    render() { 
        return (
        <div>
            <a className = "App-link" href = {this.props.link} target = "_blank" rel="noopener noreferrer">{this.props.name}</a>
        </div>
        );
    }
}
 
export default Link;