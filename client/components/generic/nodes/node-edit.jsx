NodeEdit = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    Meteor.subscribe( 'nodesChildren', this.props.nodeId );
    // Meteor.subscribe( 'nodes-children', this.props.nodeId );
    return {
      node: Nodes.findOne( { _id: this.props.nodeId } ),
      nodes: Nodes.find( { parent: this.props.nodeId } ).fetch().map( ( node ) => {
        var href=`/nodes/${ node._id }/edit`;
        if(node.type === 'post'){
          href=`/posts/${ node.ref_id }/edit`;
        }
        return { _id: node._id, href: href, label: node.label, type: node.type };
      })
    };
  },
  getInitialState(){
    // by default using the shouldChildComponentUpdate is false
    return{
      shouldChildComponentUpdate: false,
      showModal: false
    };
  },
  saveNode(e){
    var node = this.data.node
    node[e.target.name] = e.target.value;
    Meteor.call( 'saveNode', node, ( error, response ) => {
      if ( error ) {
        Bert.alert( error.reason, 'danger' );
      }
    });
  },
  deleteNode(){
    // console.log("delete node")
    // add modal here
    Meteor.call( 'deleteNode', this.data.node, ( error, response ) => {
      if (error) {
        Bert.alert( error.reason, 'danger' );
      } else {
        FlowRouter.go( `/nodes` );
        // Bert.alert( 'Node deleted!', 'success' );
      }
    });
  },
  toggleModal(){
    this.setState({showModal: !this.state.showModal});
  },
  componentWillReceiveProps(nextProps){
    // when parent has received new props also update child component
    this.setState({
      shouldChildComponentUpdate: nextProps.nodeId != this.props.nodeId
    });
  },
  render() {
    // console.log(this.state)
    if ( !this.data.node ) { return <div />; }
    return <div className={"row " + this.props.className}>
          <div className="col-sm-12">
            <ContentEditable
              name="label"
              focus={true}
              text={ this.data.node.label }
              tagName="h4"
              className="page-header"
              disabled={false}
              shouldComponentUpdate={this.state.shouldChildComponentUpdate}
              onChange={ this.saveNode }
            />
          </div>
          <div className="col-sm-12">
            <p><Button onClick={this.toggleModal} className="" style="danger">Delete</Button></p>
            <Modal
              showModal={this.state.showModal}
              title="Confirm"
              onCancel={this.toggleModal}
              cancelLabel="Cancel"
              onConfirm={this.deleteNode}
              confirmLabel="Delete"
            ><p>Please confirm the deletion of node: {this.data.node.label}</p></Modal>
          </div>
          <div className="col-sm-12">
            <ListGroup linked={ true } items={  _.where(this.data.nodes, {type: 'post'}) } iconClassName="glyphicon glyphicon-file" />
          </div>
          <div className="col-sm-12">
            <ListGroup linked={ true } items={ _.where(this.data.nodes, {type: 'node'}) } iconClassName="glyphicon glyphicon-folder-close" />
          </div>
        </div>
  },
  componentDidUpdate(){
    // once parent is updated do not update child component
    this.state.shouldChildComponentUpdate = false
  }
});
