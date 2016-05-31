import React from 'react';

export default class Table extends React.Component {

  renderHeader(headers){
    return (
      <tr>
        {headers.map((header) => {
            return (<th key={header}>{header}</th>)
        })}
      </tr>
    )
  }

  renderItems(items){
    return items.map((item) => {
        return (
          <tr key={item._id}>
            {_.map(item, (value, key) => {
              return (<td key={key}>{value}</td>);
            })}
          </tr>
        )
    })
  }

  render() {
    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
            {this.renderHeader(this.props.headers)}
          </thead>
          <tbody>
            {this.renderItems(this.props.items)}
          </tbody>
        </table>
      </div>
    );
  }
}
