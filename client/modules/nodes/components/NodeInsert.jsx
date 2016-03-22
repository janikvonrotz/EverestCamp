import React from 'react';

import { Button, GridColumn } from '../../bootstrap/components/index.jsx';

class NodeInsert extends React.Component {

  render(){
    // console.log({"NodeInsert": this.props});
    return (
      <GridColumn>
        {this.props.error ? <Notificate>{this.props.error}</Notificate> : null}
        <Button style="default" onClick={this.insertNode.bind(this)}>Insert Node</Button>
      </GridColumn>
    );
  }

  insertNode(event){
    var node = {
      parent: this.props.nodeId
    }
    this.props.insert(node);
  }
}

export default NodeInsert;
