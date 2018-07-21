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
      showMenu: false
    }
  }

  onClick = (e) => {
    e.preventDefault();
    this.setState({showMenu: !this.state.showMenu})
  }


  render() {
    return (
      <div>
      <div className="hamburger">
        <a onClick={this.onClick}><FontAwesomeIcon icon={faBars} size="3x" /></a>
      </div>

      {this.state.showMenu && <NavMenu />}
      </div>
    )
  }
}



export default Header;
