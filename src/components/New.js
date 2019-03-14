import React, { Component } from "react"
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBHamburgerToggler,
} from "mdbreact"
import { Link } from "gatsby"
import "./New.css"

class NavbarPage extends Component {
  state = {
    isOpen: false,
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand style={{ color: "white" }} center={true}>
          <Link to="/">
            <strong className="black-text">Hi I am PraveenKumar</strong>
          </Link>
        </MDBNavbarBrand>
        <MDBHamburgerToggler
          color="#ffff"
          backgroundcolor="black"
          id="hamburger1"
          onClick={this.toggleCollapse}
        />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <Link to="/Home">
              <i class="fas  fa-home " />
              Home
            </Link>
            <Link to="/Home">
              <i class="fas fa-user-circle fa-spin" />
              AboutMe
            </Link>
            <Link to="/Home">
              <i class="fas fa-envelope" /> ContactMe
            </Link>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    )
  }
}

export default NavbarPage
