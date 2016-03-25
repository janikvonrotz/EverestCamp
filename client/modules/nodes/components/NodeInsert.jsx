import React from 'react';

import { Button, GridColumn } from '../../bootstrap/components/index.jsx';

export default class NodeInsert extends React.Component {

  render(){
    return (
      <GridColumn>
        <Button style="default" onClick={this.insert.bind(this)}>Insert Node</Button>
      </GridColumn>
    );
  }

  insert(event){
    var node = {
      parent: this.props.nodeId
    }
    this.props.insert(node);
  }
}
