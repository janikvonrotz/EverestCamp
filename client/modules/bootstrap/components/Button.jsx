import React from 'react';
import classNames from 'classnames/bind';

export default class Button extends React.Component {

  render() {
    if ( this.props.href ) {
      return (
        <a href={ this.props.href }
        className={ classNames('btn', 'btn-' + this.props.style + '-outline', this.props.className) }>
          { this.props.children }
        </a>
      );
    } else {
      return (
        <button type={ this.props.type }
          className={ classNames('btn', 'btn-' + this.props.style + '-outline', this.props.className) }
          onClick={ this.props.onClick }
          aria-label={ this.props.ariaLabel}>
          { this.props.children }
        </button>
      );
    }
  }
}
