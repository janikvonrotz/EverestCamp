import React from 'react';

import { GridRow, ContentEditable, GridColumn, Button, FormControl, FormGroup, Modal, FullscreenViewer } from '../../bootstrap/components/index.jsx';
import { MarkdownEditor } from '../../files/containers';

export default class NodeEdit extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      shouldChildComponentUpdate: false,
      showModal: false
    };
  };

  update(event){
    var post = this.props.post

    if(event.target.type && event.target.type == 'checkbox'){
      post[event.target.name] = Boolean(event.target.checked);
    }else{
      post[event.target.name] = event.target.value;
    }

    this.props.update(post);
  }

  remove(event){
    this.props.remove(this.props.post);
    this.toggleModal();
  }

  toggleModal(event){
    this.setState({showModal: !this.state.showModal});
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      shouldChildComponentUpdate: nextProps.postId != this.props.postId
    });
  }

  render(){
    if ( !this.props.post ) { return <GridColumn />; }
    return(
      <GridRow className="post-edit">
        <GridColumn className="col-sm-12">
          <ContentEditable
            name="title"
            focus={true}
            text={ this.props.post.title }
            tagName="h4"
            className="page-header"
            disabled={false}
            shouldComponentUpdate={this.state.shouldChildComponentUpdate}
            onChange={ this.update.bind(this) } />
        </GridColumn>
        <GridColumn className="col-sm-12">
          <FormControl
            style="checkbox"
            name="public"
            label="Public"
            defaultValue={this.props.post.public}
            onChange={ this.update.bind(this) } />
        </GridColumn>
        <GridColumn className="col-sm-12">
          <FormGroup>
          <FullscreenViewer>
            <MarkdownEditor
              name="content"
              text={this.props.post.content}
              onChange={this.update.bind(this)} />
           </FullscreenViewer>
           </FormGroup>
        </GridColumn>
        <GridColumn className="col-sm-12">
          <FormGroup>
          <Button onClick={this.toggleModal.bind(this)} style="danger">Delete</Button>
          </FormGroup>
          <Modal
            showModal={this.state.showModal}
            title="Confirm"
            onCancel={this.toggleModal.bind(this)}
            cancelLabel="Cancel"
            onConfirm={this.remove.bind(this)}
            confirmLabel="Delete">
            <p>Please confirm the deletion of post: {this.props.post.title}</p>
            </Modal>
        </GridColumn>
      </GridRow>
    );
  }

  componentDidUpdate(){
    this.state.shouldChildComponentUpdate = false;
    FlowRouter.go('/login');
  }
}
