import React, { Component } from "react";
import "./Menu.css";
 
class Menu extends Component {
  render() {
    var visibility = "hide";
 
    if (this.props.menuVisibility) {
      visibility = "show";
    }
 
    return (
      <div id="flyoutMenu"
           onMouseDown={this.props.handleMouseDown} 
           className={visibility}>
        <div  className="lf">
            <br/>
        <h2><p href="#">หน้าหลัก</p></h2>
        <h2><p href="#">โปรไฟล์</p></h2>
        <h2><p href="#">เช็คอิน</p></h2>
        <h2><p href="#">ออกจากระบบ</p></h2>
        </div>
      </div>
    );
  }
}
 
export default Menu;