import React from 'react';
import classNames from 'classnames/bind';

export default class FormGroup extends React.Component {

  render() {
    return (
      <fieldset className={classNames("form-group", this.props.className)}>
        { this.props.children }
      </fieldset>
    );
  }
}
