import React from 'react';
import { Button } from '../../bootstrap/components/index.jsx';

export default class PostInsert extends React.Component {

  render(){
    return (
      <Button style="default" onClick={this.insert.bind(this)}>New Post</Button>
    );
  }

  insert(event){
    this.props.insert(this.props.nodeId);
  }
}
