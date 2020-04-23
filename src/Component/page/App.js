import React,{Component} from 'react';
import './App.css';
import './style.css'
import MenuButton from '../Menu/MenuButton.js'
import Menu from '../Menu/Menu.js'


class App extends Component {
  constructor(props, context) {
    super(props, context);
 
    this.state = {
      visible: false
    };
 
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }
 
  handleMouseDown(e) {
    this.toggleMenu();
 
    console.log("clicked");
    e.stopPropagation();
  }
 
  toggleMenu() {
    this.setState(
      {
        visible: !this.state.visible
      }
    );
  }
  render(){
  return (
    <div>
      
       <nav class="navbar">
   
       <MenuButton handleMouseDown={this.handleMouseDown}/>
       <Menu handleMouseDown={this.handleMouseDown}menuVisibility={this.state.visible}/>

  </nav>


      </div>
  );
  }
}

export default App;
