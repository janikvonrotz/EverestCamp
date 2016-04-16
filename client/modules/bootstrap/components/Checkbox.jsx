import React from 'react';
import Label from './Label.jsx';

export default class Checkbox extends React.Component {

  renderCheckbox(){
    if ( this.props.defaultValue ) {
      return (
        <input
        defaultChecked={ true }
        type="checkbox"
        name={ this.props.name }
        id={ this.props.id }
        onChange={ this.props.onChange }
        onClick={ this.toggleCheckbox } />
      );
    } else {
      return (
        <input
        type="checkbox"
        name={ this.props.name }
        id={ this.props.id }
        onChange={ this.props.onChange } />
      );
    }
  }

  render() {
    if(this.props.label){
      return(
        <div className="checkbox">
        <Label>
          {this.renderCheckbox()}
          {this.props.label}
        </Label>
        </div>
      )
    }else{
      return (
        <div className="checkbox">
          {this.renderCheckbox()}
        </div>
      );
    }
  }
}
