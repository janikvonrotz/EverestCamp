import React from 'react';

export default class ListGroup extends React.Component {

  renderIcon(){
    if(this.props.iconClassName){
      return (
        <i className={this.props.iconClassName}></i>
      );
    }
  }

  renderListGroup() {
    if ( this.props.linked ) {
      return (
        <div className="list-group">
          {this.props.items.map( ( item ) => {
            return (
              <a key={ item._id } href={ item.href } className={"list-group-item"}>
              {this.renderIcon()}
              {item.label }
              </a>
            );
          })}
        </div>
      );
    } else {
      return (
        <ul className="list-group">
          {this.props.items.map( ( item ) => {
            return (
              <li key={ item._id } className={"list-group-item"}>
              {this.renderIcon()}
              {item.label }
              </li>
            );
          })}
        </ul>
      );
    }
  }

  render() {
    return this.renderListGroup();
  }
}
