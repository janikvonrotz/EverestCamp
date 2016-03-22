import React from 'react';

import { GridColumn, Button, Modal } from '../../bootstrap/components/index.jsx';

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
    node[e.target.name] = e.target.value;
    this.props.update(node);
  }

  remove(event){
    this.props.remove(this.props.node);
  }

  toggleModal(event){
    this.setState({showModal: !this.state.showModal});
  }

  componentWillReceiveProps(nextProps){
    // when parent has received new props also update child component
    this.setState({
      shouldChildComponentUpdate: nextProps.node._id != this.props.node._id
    });
  }

  render(){
    console.log(this.props);
    if ( !this.props.node ) { return <GridColumn />; }
    return(
      <GridColumn className="col-sm-12">
        <p><Button onClick={this.toggleModal.bind(this)} style="danger">Delete</Button></p>
        <Modal />
        <Button
          showModal={this.state.showModal}
          title="Confirm"
          onCancel={this.toggleModal.bind(this)}
          cancelLabel="Cancel"
          onConfirm={this.remove.bind(this)}
          confirmLabel="Delete">
          <p>Please confirm the deletion of node: {this.props.node.label}</p>
          </Button>
      </GridColumn>
    );
  }

  componentDidUpdate(){
    // once parent is updated do not update child component
    this.state.shouldChildComponentUpdate = false
  }
}
