import React from 'react';
import classNames from 'classnames/bind';

export default class FormGroup extends React.Component {

  render() {
    return (
      <div className={classNames("form-group", this.props.className)}>
        { this.props.children }
      </div>
    );
  }
}
