FileEdit = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    Meteor.subscribe( 'fileEdit', this.props.fileId );
    return {
      file: Files.findOne({_id: this.props.fileId})
    };
  },
  getInitialState(){
    // by default using the shouldChildComponentUpdate is false
    return{
      shouldChildComponentUpdate: false,
      showModal: false
    };
  },
  saveFile(e){
    Files.update({_id: this.data.file._id}, {$set: {'metadata.name': e.target.value}});
  },
  deleteFile(){
    Files.remove(this.data.file._id, ( error, response ) => {
      if (error) {
        Bert.alert( error.reason, 'danger' );
      } else {
        FlowRouter.go( `/files` );
      }
    });
  },
  toggleModal(){
    this.setState({showModal: !this.state.showModal});
  },
  componentWillReceiveProps(nextProps){
    // when parent has received new props also update child component
    this.setState({
      shouldChildComponentUpdate: nextProps.fileId != this.props.fileId
    });
  },
  render() {
    // console.log(this.state)
    if ( !this.data.file ) { return <div />; }
    return <GridRow>
          <GridColumn className="col-md-6 col-md-offset-3">
            <ContentEditable
              name="name"
              focus={true}
              text={ this.data.file.metadata.name }
              tagName="h4"
              className="page-header"
              disabled={false}
              shouldComponentUpdate={this.state.shouldChildComponentUpdate}
              onChange={ this.saveFile }
            />
            <img className="img-responsive" src={this.data.file.url()} />
            <p></p>
            <Button onClick={this.toggleModal} className="" style="danger">Delete</Button>
            <Modal
              showModal={this.state.showModal}
              title="Confirm"
              onCancel={this.toggleModal}
              cancelLabel="Cancel"
              onConfirm={this.deleteFile}
              confirmLabel="Delete"
            ><p>Please confirm the deletion of file: {this.data.file.metadata.name}</p></Modal>
          </GridColumn>
        </GridRow>
  },
  componentDidUpdate(){
    // once parent is updated do not update child component
    this.state.shouldChildComponentUpdate = false
  }
});
