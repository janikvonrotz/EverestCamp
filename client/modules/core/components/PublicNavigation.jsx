import React from 'react';
import { NavbarNav, Navbar } from '../../bootstrap/components/index.jsx';

export default class PublicNavigation extends React.Component {
  render() {
    return(
      <Navbar className="public-navigation" id="app-header" brandLink="/" brand="EverestCamp">
        <NavbarNav className="pull-xs-right" items={ this.props.items.right } />
      </Navbar>
    );
  }
}
