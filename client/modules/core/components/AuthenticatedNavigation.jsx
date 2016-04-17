import React from 'react';
import { Navbar, NavbarNav } from '../../bootstrap/components/index.jsx';

export default class AuthenticatedNavigation extends React.Component {
  render() {
    return(
      <Navbar className="authenticated-navigation" id="app-header" brandLink="/" brand="EverestCamp">
        <NavbarNav items={ this.props.items.left } />
        <NavbarNav className="pull-xs-right" items={ this.props.items.right } />
      </Navbar>
    );
  }
};
