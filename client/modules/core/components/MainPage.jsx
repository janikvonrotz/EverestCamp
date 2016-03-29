import React from 'react';

import {
  GridColumn,
  Input,
  ButtonGroup,
  FormGroup
} from '../../bootstrap/components/index.jsx';
import { TreeView, NodeInsert, NodeEdit } from '../../nodes/containers';
import { PostInsert, PostEdit } from '../../posts/containers';

export default class MainPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {filterText: ''};
  }

  renderItemView(){
    console.log(this.props);
    if(!this.props.postId){
      return (
        <NodeEdit nodeId={this.props.nodeId} />
      );
    } else {
      return (
        <PostEdit postId={this.props.postId} />
      );
    }
  }

  render(){
    return(
      <GridColumn>
        <ButtonGroup>
          <NodeInsert nodeId={this.props.nodeId} />
          <PostInsert nodeId={this.props.nodeId} />
        </ButtonGroup>
        <p></p>
        <FormGroup>
          <Input
          style="input"
          type="text"
          name="search"
          placeholder="Search"
          onChange={ this.filterList.bind(this) }
          defaultValue="" />
        </FormGroup>
        <TreeView activeNodeId={this.props.nodeId} filterText={this.state.filterText} />
        { this.renderItemView() }
      </GridColumn>
    );
  }

  filterList(event){
    this.setState({
      filterText: event.target.value
    });
  }
}
