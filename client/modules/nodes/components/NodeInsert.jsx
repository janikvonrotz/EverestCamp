import React from 'react';
import { Button } from '../../bootstrap/components/index.jsx';

export default class NodeInsert extends React.Component {

  render(){
    return (
      <Button style="default" onClick={this.insert.bind(this)}>New Node</Button>
    );
  }

  insert(event){
    var node = {
      parent: this.props.nodeId
    }
    this.props.insert(node);
  }
}
