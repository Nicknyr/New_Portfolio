import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faBars } from '@fortawesome/free-solid-svg-icons'
import NavMenu from './Menu';
import Logo from './images/centered.png';


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
      <div className="mobile-header">
        <div className="hamburger">
          <span>
            <a onClick={this.onClick}><FontAwesomeIcon icon={faBars} size="2x" /></a>
          </span>
          <span>
            Menu
          </span>
        </div>
          {this.state.showMenu && <NavMenu />}
      </div>

      <div className="full-width-header">
        <NavMenu />
      </div>
      </div>
    )
  }
}



export default Header;
