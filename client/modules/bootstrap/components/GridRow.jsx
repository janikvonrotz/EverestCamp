import React from 'react';
import classNames from 'classnames/bind';

export default class GridRow extends React.Component {
  render() {
    return(
      <div className={classNames('row', this.props.className)}>
        { this.props.children }
      </div>
    );
  }
}
