import React from 'react';

export default class ListGroup extends React.Component {

  renderItem(item){
    if(this.props.iconClassName){
      return (
        <span><i className={this.props.iconClassName}></i> {item.label}</span>
      );
    }else{
      return item.label
    }
  }

  renderListGroup() {
    if ( this.props.linked ) {
      return (
        <div className="list-group">
          {this.props.items.map( ( item ) => {
            return (
              <a key={ item._id } href={ item.href } className={"list-group-item"}>
              {this.renderItem(item)}
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
              {this.renderItem(item)}
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
