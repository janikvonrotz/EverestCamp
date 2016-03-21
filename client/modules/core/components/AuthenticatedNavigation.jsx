import React from 'react';

import { Navbar, NavbarNav } from '../../bootstrap/components/index.jsx';

export default class AuthenticatedNavigation extends React.Component {
  render() {
    return(
      <Navbar className="authenticated-navigation" id="app-header" brandLink="/nodes" brand="EverestCamp">
        <NavbarNav position="navbar-left" items={ this.props.items.left } />
        <NavbarNav position="navbar-right" items={ this.props.items.right } />
      </Navbar>
    );
  }
};
