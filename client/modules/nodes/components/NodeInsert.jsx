import React from 'react';

import { Button, Notificate } from '../../bootstrap/components/index.jsx';

class NodeInsert extends React.Component {

  insertNode(){
    console.log(this.props);
    var node = {
      parent: this.props.nodeId
    }
    // this.props.insert(node);
  }

  render(){
    return (
      <div>
        {this.props.error ? <Notificate>{this.props.error}</Notificate> : null}
        <Button style="default" onClick={this.insertNode()}>Add Node</Button>
      </div>
    );
  }
}

export default NodeInsert;
