import React from 'react';
import { GridRow, ContentEditable, GridColumn, Button, Modal, ListGroup } from '../../bootstrap/components/index.jsx';

export default class NodeEdit extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      shouldChildComponentUpdate: false,
      showModal: false
    };
  };

  update(event){
    var node = this.props.node
    node[event.target.name] = event.target.value;
    this.props.update(node);
  }

  remove(event){
    this.props.remove(this.props.node);
    this.toggleModal();
  }

  toggleModal(event){
    this.setState({showModal: !this.state.showModal});
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      shouldChildComponentUpdate: nextProps.nodeId != this.props.nodeId
    });
  }

  renderChildLists(){
    if(this.props.nodes.length > 0){
      return(
        <GridColumn className="col-sm-12">
          <ListGroup linked={ true } items={  _.where(this.props.nodes, {type: 'post'}) } iconClassName="fa fa-file-text-o" />
          <p></p>
          <ListGroup linked={ true } items={ _.where(this.props.nodes, {type: 'node'}) } iconClassName="fa fa-folder-o" />
          <p></p>
        </GridColumn>
      );
    }
  }

  render(){
    if ( !this.props.node ) { return <GridColumn />; }
    return(
      <GridRow className="node-edit">
        <GridColumn className="col-sm-12">
          <ContentEditable
          name="label"
          focus={true}
          text={ this.props.node.label }
          tagName="h2"
          className="page-header"
          disabled={false}
          shouldComponentUpdate={this.state.shouldChildComponentUpdate}
          onChange={ this.update.bind(this) } />
          <p></p>
        </GridColumn>
        { this.renderChildLists() }
        <GridColumn className="col-sm-12">
          <p><Button onClick={this.toggleModal.bind(this)} style="danger">Delete</Button></p>
          <Modal
          showModal={this.state.showModal}
          title="Confirm"
          onCancel={this.toggleModal.bind(this)}
          cancelLabel="Cancel"
          onConfirm={this.remove.bind(this)}
          confirmLabel="Delete">
            <p>Please confirm the deletion of node: {this.props.node.label}</p>
          </Modal>
        </GridColumn>
      </GridRow>
    );
  }

  componentDidUpdate(){
    this.state.shouldChildComponentUpdate = false
  }
}
