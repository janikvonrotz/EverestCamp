import React from 'react';

export default class Alert extends React.Component {
  render() {
    return <p className={ `alert alert-${ this.props.style }` }>
      { this.props.children }
    </p>;
  }
}
