import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faBars } from '@fortawesome/free-solid-svg-icons'
import NavMenu from './Menu';


class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
      outSideClick : false
    }
  }

  onClick = (e) => {
    e.preventDefault();
    this.setState({showMenu: !this.state.showMenu})
  }

  componentDidMount = () => {
    window.addEventListener('onClick', this.outsideClick, true);
  }


  outsideClick = () => {
    if(this.outSideClick) {
      return ;
    }

    this.setState ({ showMenu: false });
  }

  mouseDownHandler = () => {
    this.outSideClick = true;
  }

  mouseUpHandler = () => {
    this.outSideClick = false;
  }

  render() {
    return (
      <div>
      <a onClick={this.onClick}><FontAwesomeIcon icon={faBars} size="3x" /></a>
      {this.state.showMenu && <NavMenu onMouseDown={this.props.onMouseDown} onMouseUp={this.props.onMouseUp}/>}
    </div>
    )
  }
}



export default Header;
