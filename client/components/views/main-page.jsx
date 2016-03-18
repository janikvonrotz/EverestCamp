MainPage = React.createClass({
  handleNewNode() {
    var node = {
      parent: this.props.nodeId
    }

    // add to collection
    Meteor.call( 'newNode', node, ( error, nodeId ) => {
      if ( error ) {
        Bert.alert( error.reason, 'danger' );
      } else {
        FlowRouter.go( `/nodes/${ nodeId }/edit` );
      }
    });
  },
  handleNewPost() {
    Meteor.call( 'newPost', ( error, postId ) => {
      if ( error ) {
        Bert.alert( error.reason, 'danger' );
      } else {
        var node = {
          label: "Untitled Post",
          parent: this.props.nodeId,
          ref_id: postId,
          type: "post"
        }
        Meteor.call( 'newNode', node, ( error, nodeId ) => {
          if ( error ) {
            Bert.alert( error.reason, 'danger' );
          } else {
            FlowRouter.go( `/posts/${ postId }/edit` );
            // Bert.alert( 'All set! Get to typin\'', 'success' );
          }
        });
      }
    });
  },
  getEditView(){
    if(this.props.postId){
      return <PostEdit postId={this.props.postId} />
    }
    if(this.props.nodeId){
      return <NodeEdit nodeId={this.props.nodeId} />
    }
    return <PostsSearch />
  },
  render() {
    return <GridRow>
      <GridColumn className="col-md-4">
        <TreeView activeNodeId={this.props.nodeId || this.props.postId}>
          <ButtonGroup>
          <Button style="default" type="button" onClick={ this.handleNewNode }>New Node</Button>
          <Button style="default" type="button" onClick={ this.handleNewPost }>New Post</Button>
          </ButtonGroup>
          <p></p>
        </TreeView>
      </GridColumn>
      <GridColumn className="col-md-8">
        {this.getEditView()}
      </GridColumn>
    </GridRow>;
  }
});
