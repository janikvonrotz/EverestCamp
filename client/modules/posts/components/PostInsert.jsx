import React from 'react';

import { Button, GridColumn } from '../../bootstrap/components/index.jsx';

export default class PostInsert extends React.Component {

  render(){
    return (
      <GridColumn>
        <Button style="default" onClick={this.insert.bind(this)}>Insert Post</Button>
      </GridColumn>
    );
  }

  insert(event){
    this.props.insert(this.props.nodeId);
  }
}
