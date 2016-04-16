import React from 'react';

export default class Label extends React.Component {

  render(){
    if ( !this.props.href ) {
      return (
        <label htmlFor={ this.props.name }>
          { this.props.children }
        </label>
      );
    } else {
      return (
        <label htmlFor={ this.props.name }>
          <span className="pull-left">{ this.props.label }</span>
          <a className="pull-right" href={ this.props.href }>
            { this.props.children }
          </a>
        </label>
      );
    }
  }
}
