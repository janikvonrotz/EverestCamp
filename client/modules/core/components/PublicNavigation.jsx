import React from 'react';

import { Navbar, NavbarNav } from '../../bootstrap/components/index.jsx';

export default class PublicNavigation extends React.Component {
  render() {
    console.log(this.props);
    return(
      <Navbar className="public-navigation" id="app-header" brandLink="/" brand="EverestCamp">
        <NavbarNav position="navbar-right" items={ this.props.items.right } />
      </Navbar>
    );
  }
}
