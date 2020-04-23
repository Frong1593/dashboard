import React, { Component } from "react";

 
class MenuButton extends Component {
    

  

  render() {
    return (

              <span id="roundButton"  onMouseDown={this.props.handleMouseDown}>
              <a href="#" >
                <svg width="30" height="30">
                    <path d="M0,5 30,5" stroke="#fff" stroke-width="5"/>
                    <path d="M0,14 30,14" stroke="#fff" stroke-width="5"/>
                    <path d="M0,23 30,23" stroke="#fff" stroke-width="5"/>
                </svg>
              </a>
            </span>
              
    );
  }
}
 
export default MenuButton;