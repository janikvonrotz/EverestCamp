import React from 'react';
import classNames from 'classnames/bind';

export default class ButtonGroup extends React.Component {
  render() {
    return(
      <div className={classNames("btn-group", this.props.className)} role="group">
        { this.props.children }
      </div>
    );
  }
}
