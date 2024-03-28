import React, { Component } from "react";
import { Nav, Navbar, NavItem, NavLink, NavbarBrand } from "reactstrap";
class AppNav extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">FinEx Expense Tracker</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/categories">Categories</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/expense">Expense</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/aggregator">Aggregator</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default AppNav;
