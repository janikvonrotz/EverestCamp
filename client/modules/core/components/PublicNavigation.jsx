import React from 'react';

import { NavbarNav } from '../../bootstrap/components/index.jsx';

export default class PublicNavigation extends React.Component {
  render() {
    console.log(this.props);
    return(
      <div className="public-navigation">
        <NavbarNav position="navbar-right" items={ this.props.items.right } />
      </div>
    );
  }
}
