import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faBars } from '@fortawesome/free-solid-svg-icons'
import NavMenu from './Menu';
import Logo from './images/centered.png';
import { slide as Menu } from 'react-burger-menu'


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
      <Menu>
        <div className="hamburger">
          <span>
            <a onClick={this.onClick}><FontAwesomeIcon icon={faBars} size="1x" /></a>
          </span>
          <span>
            Menu
          </span>
        </div>
          {this.state.showMenu && <NavMenu />}
      </Menu>

      <div className="full-width-header">
        <NavMenu />
      </div>
      </div>
    )
  }
}



export default Header;
