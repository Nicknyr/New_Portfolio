import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faBars } from '@fortawesome/free-solid-svg-icons'
import NavMenu from './Menu';
import Logo from './images/centered.png';
import { slide as Menu } from 'react-burger-menu';
import Scrollchor from 'react-scrollchor';



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

  handleStateChange = (state) => {
    this.setState({ showMenu: state.isOpen })
  }

  closeMenu = () => {
    this.setState({ showMenu: false })
  }

  render() {
    return (
      <div>
       {/*<div className="hamburger">
          <span>
            <a onClick={this.onClick}><FontAwesomeIcon icon={faBars} size="1x" /></a>
          </span>
          <span>
            Menu
          </span>
        </div>*/}

      <div className="bm-burger-button">
        <span className="bm-burger-bars"></span>
      </div>

      <Menu
        isOpen={this.state.showMenu}
        onStateChange={(state) => this.handleStateChange(state)}
        width={'40%'}
      >

        <a onClick={() => this.closeMenu()} href="#portfolio">Portfolio</a>
        <a onClick={() => this.closeMenu()} href="#intro">About</a>
        <a onClick={() => this.closeMenu()} href="#contact">Contact</a>
      </Menu>

      <div className="full-width-header">
        <NavMenu />
      </div>
      </div>
    )
  }
}



export default Header;
