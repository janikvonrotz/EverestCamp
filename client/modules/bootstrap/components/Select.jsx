import React from 'react';

export default class Select extends React.Component {

  render(){
    return (
      <select className="form-control"
      name={ this.props.name }
      required={ this.props.required }
      disabled={ this.props.disabled }
      onChange={ this.props.onChange }
      defaultValue={ this.props.defaultValue }>
        {this.props.options.map((option) => {
          return (<option value={option.value} key={option.key || option.value}>{option.value}</option>)
        })}
      </select>
    );
  }
}
