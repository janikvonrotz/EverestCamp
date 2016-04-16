import React from 'react';

export default class Input extends React.Component {

  render(){
    return (
      <input
      ref={ this.props.ref }
      name={ this.props.name }
      type={ this.props.type }
      className="form-control"
      required={ this.props.required }
      placeholder={ this.props.placeholder }
      disabled={ this.props.disabled }
      onChange={ this.props.onChange }
      defaultValue={ this.props.defaultValue } />
    );
  }
}
