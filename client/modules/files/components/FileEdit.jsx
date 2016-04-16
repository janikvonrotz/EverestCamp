import React from 'react';
import { ContentEditable, Button, GridColumn, FormControl, GridRow, Checkbox, Modal } from '../../bootstrap/components/index.jsx';

export default class FileList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      shouldChildComponentUpdate: false,
      showModal: false
    };
  };

  update(event){
    var fields = {};

    if(event.target.type && event.target.type == 'checkbox'){
      fields[event.target.name] = Boolean(event.target.checked);
    }else{
      fields[event.target.name] = event.target.value;
    }

    this.props.update(this.props.fileId, fields);
  }

  remove(){
    this.props.remove(this.props.file);
  }

  toggleModal(){
    this.setState({showModal: !this.state.showModal});
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      shouldChildComponentUpdate: nextProps.fileId != this.props.fileId
    });
  }

  render() {
    if ( !this.props.file ) { return <GridRow />; }
    return (
      <GridRow>
        <GridColumn className="col-md-8 col-md-offset-2">

          <ContentEditable
          name="metadata.name"
          focus={true}
          text={ this.props.file.metadata.name }
          tagName="h4"
          className="page-header"
          disabled={false}
          shouldComponentUpdate={this.state.shouldChildComponentUpdate}
          onChange={this.update.bind(this)} />

          <Checkbox
          name="public"
          label="Public"
          defaultValue={this.props.file.metadata.public}
          onChange={ this.update.bind(this) } />

          <p><img className="img-fluid" src={this.props.file.url()} /></p>

          <p><Button onClick={this.toggleModal.bind(this)} style="danger">Delete</Button></p>
          <Modal
            showModal={this.state.showModal}
            title="Confirm"
            onCancel={this.toggleModal.bind(this)}
            cancelLabel="Cancel"
            onConfirm={this.remove.bind(this)}
            confirmLabel="Delete">
            <p>Please confirm the deletion of file: {this.props.file.metadata.name}</p>
          </Modal>
        </GridColumn>
      </GridRow>
    );
  }

  componentDidUpdate(){
    this.state.shouldChildComponentUpdate = false
  }
}
