import React from 'react';
import classNames from 'classnames/bind';

export default class Alert extends React.Component {
  render() {
    return(
      <p className={classNames('alert', 'alert-' + this.props.style, this.props.className)}>
        { this.props.children }
      </p>
    );
  }
}
