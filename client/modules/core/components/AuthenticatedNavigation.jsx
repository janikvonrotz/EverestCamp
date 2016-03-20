import React from 'react';

import { NavbarNav } from '../../bootstrap/components/index.jsx';

export default class AuthenticatedNavigation extends React.Component {
  render() {
    return(
      <div className="authenticated-navigation">
        <NavbarNav position="navbar-left" items={ this.props.items.left } />
        <NavbarNav position="navbar-right" items={ this.props.items.right } />
      </div>
    );
  }
};
