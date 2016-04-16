import React from 'react';
import classNames from 'classnames/bind';

export default class NavbarNav extends React.Component {

  render() {
    let classes = classNames('nav navbar-nav', this.props.className);
    return(
      <ul className={ classes }>
        {this.props.items.map( ( item, index ) => {
          item.active = FlowRouter.getRouteName() === item.uid;
          return this.renderItem( item );
        })}
      </ul>
    );
  }

  renderItem( item ) {
    let classes = classNames({
      'nav-item': true,
      'active': item.active
    });
    return (
      <li key={ item.uid } className={ classes }>
        <a className="nav-link" href={ item.href } onClick={ item.action }>{ item.label }</a>
      </li>
    );
  }
};
