import React from 'react';

export default class Table extends React.Component {

  render() {
    return (
      <table className="table">
      <thead>
        <tr>
          {_.each(this.props.headera, (header) => {
            return (<th>{header}</th>);
          })}
        </tr>
      </thead>
      <tbody>
        {_.each(this.props.items, (item) => {
            return (
              <tr>
                {_.object(_.map(item, (value, key) => {
                  return (<td>value</td>);
                }))}
              </tr>
            );
        })}
        </tbody>
      </table>
    );
  }
}
