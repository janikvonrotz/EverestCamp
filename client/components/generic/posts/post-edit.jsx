PostEdit = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    Meteor.subscribe( 'postEdit', this.props.postId );
    return {
      post: Posts.findOne(this.props.postId)
    };
  },
  getInitialState(){
    // by default using the shouldChildComponentUpdate is false
    return{
      shouldChildComponentUpdate: false
    };
  },
  getLastUpdate() {
    if ( this.data ) {
      let { formatLastUpdate } = ReactHelpers,
      post = this.data.post;
      return `${ formatLastUpdate( post.updated ) } by ${ post.author }`;
    }
  },
  handleSubmit( event ) {
    event.preventDefault();
  },
  savePost(e){
    var post = this.data.post
    if("type" in e.target && e.target.type == 'checkbox'){
      post[e.target.name] = Boolean(e.target.checked);
    }else{
      post[e.target.name] = e.target.value;
    }
    Meteor.call( 'savePost', post, ( error, response ) => {
      if ( error ) {
        Bert.alert( error.reason, 'danger' );
      }
    });
  },
  deletePost(){
    Meteor.call( 'deletePost', this.data.post, ( error, response ) => {
      if (error) {
        Bert.alert( error.reason, 'danger' );
      } else {
        FlowRouter.go( `/nodes` );
      }
    });
  },
  toggleModal(){
    this.setState({showModal: !this.state.showModal});
  },
  toggleModalFiles(){
    this.setState({showModalFiles: !this.state.showModalFiles});
  },
  componentWillReceiveProps(nextProps){
    // when parent has received new props also update child component
    this.setState({
      shouldChildComponentUpdate: nextProps.postId != this.props.postId
    });
  },
  render() {
    if ( !this.data.post ) { return <div />; }

    return <div className={classNames("row", this.props.className)}>
          <div className="col-sm-12">
            <ContentEditable
              name="title"
              text={ this.data.post.title }
              tagName="h4"
              className="page-header"
              shouldComponentUpdate={this.state.shouldChildComponentUpdate}
              disabled={false}
              onChange={ this.savePost }
            />
          </div>
          <div className="col-sm-12">
            <FormControl
              style="checkbox"
              className=""
              name="public"
              label="Public"
              defaultValue={this.data.post.public}
              onChange={ this.savePost }
            />
            <p><Button onClick={this.toggleModalFiles} style="default">Add Media</Button></p>
            <Modal
              showModal={this.state.showModalFiles}
              title="Select a file to insert."
              onCancel={this.toggleModalFiles}
              cancelLabel="Cancel"
              onConfirm={this.insertFile}
              confirmLabel="Insert"
            ><FilesSearch selectable={true} /></Modal>
          </div>
          <div className="col-sm-12">
            <MarkdownEditor
               name="content"
               className="row-fluid"
               markdownClassName="col-md-6"
               previewClassName="col-md-6"
               shouldComponentUpdate={this.state.shouldChildComponentUpdate}
               defaultValue={ this.data.post.content }
               onChange={ this.savePost }
            />
          </div>
          <div className="col-sm-12">
          <p><Button onClick={this.toggleModal} style="danger">Delete</Button></p>
            <Modal
              showModal={this.state.showModal}
              title="Confirm"
              onCancel={this.toggleModal}
              cancelLabel="Cancel"
              onConfirm={this.deletePost}
              confirmLabel="Delete"
            ><p>Please confirm the deletion of post: {this.data.post.title}</p></Modal>
          </div>
          <div className="col-sm-12">
          <p className="updated-date"><strong>Last Updated:</strong> { this.getLastUpdate() }</p>
          </div>
        </div>
  },
  componentDidUpdate(){
    // once parent is updated do not update child component
    this.state.shouldChildComponentUpdate = false
  }
});
