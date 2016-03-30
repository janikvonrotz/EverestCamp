import React from 'react';

export default class GridColumn extends React.Component {
  render() {
    return(
      <div className={this.props.className} onClick={ this.props.onClick }>
        { this.props.children }
      </div>
    );
  }
}
