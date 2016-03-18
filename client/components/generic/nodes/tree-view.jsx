TreeView = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    Meteor.subscribe('nodesSearch', this.state.query);
    
    return {
      nodes: Nodes.find({}, {sort: {label: 1}}).fetch().map( ( node ) => {
        var href=`/nodes/${ node._id }/edit`;
        if(node.type === 'post'){
          href=`/posts/${ node.ref_id }/edit`;
        }
        return { _id: node._id, type: node.type, href: href, label: node.label, parent: node.parent };
      })
    }
  },
  getInitialState() {
    return {
      query: '',
      collapsedNodes: JSON.parse(localStorage["collapsedNodes"] || null)
    }
  },
  toggleCollapse(nodeId){
    let collapsedNodes = this.state.collapsedNodes
    // check if undefined
    collapsedNodes = ( typeof collapsedNodes != 'undefined' && collapsedNodes instanceof Array ) ? collapsedNodes : []

    // update collapsed node list
    if(_.contains(collapsedNodes, nodeId)){
      collapsedNodes = _.without(collapsedNodes, nodeId);
    }else{
      collapsedNodes.unshift(nodeId);
    }

    // save list
    this.setState({collapsedNodes: collapsedNodes})
    localStorage.setItem("collapsedNodes", JSON.stringify(collapsedNodes));
  },
  filterList(e){
    this.setState({
      query: e.target.value
    });
  },
  handleDragStart(nodeId, e) {
    this.dragged = e.target.parentNode;
    this.sourceId = nodeId;
    e.target.parentNode.style.opacity = '0.4';  // this / e.target is the source node.
  },
  handleDragEnter(nodeId, e){
    e.target.parentNode.style.backgroundColor = 'lightgrey';
    this.over = e.target.parentNode;
    this.targetId = nodeId;
  },
  handleDragOver(e) {
   if (e.preventDefault) {
     e.preventDefault(); // Necessary. Allows us to drop.
    }
   e.dataTransfer.dropEffect = 'move';
 },
  handleDragLeave(e){
    e.target.parentNode.style.backgroundColor = '';
    this.targetId = undefined;
  },
  handleDrop(e) {
    if(typeof this.targetId != 'undefined'){
      let node = Nodes.findOne(this.sourceId);
      node.parent = this.targetId;
      Meteor.call( 'saveNode', node, ( error, response ) => {
        if (error) {
          Bert.alert( error.reason, 'danger' );
        }
      });
    }
  },
  handleDragEnd(e) {
    this.dragged.style.opacity = '';
    if(typeof this.over != 'undefined'){
      this.over.style.backgroundColor = '';
    }
  },
  // iterative funtion to generate lists and its children
  renderNodesList(parentnode){

    var nodes = this.data.nodes
    if ( nodes.length > 0 ) {

      nodes = _.where(nodes, {parent: parentnode});
      if ( nodes.length > 0 ) {

        return <ul className="tree-view">
        {nodes.map((node) => {

          var arrowClassName = classNames({
            'tree-view_arrow': true,
            'tree-view_arrow-collapsed': _.contains(this.state.collapsedNodes, node._id),
          });

          var containerClassName = classNames({
            'tree-view_node': true,
            'tree-view_node-collapsed': _.contains(this.state.collapsedNodes, node._id),
            'tree-view_node-hasChildren': _.where(this.data.nodes, {parent: node._id}).length > 0
          });

          var linkClassName = classNames({
            'tree-view_label': true,
            'tree-view_node-active': this.props.activeNodeId === node._id
          });

          var iconClassName = classNames({
            'glyphicon': true,
            'glyphicon-folder-close': node.type === 'node',
            'glyphicon-file': node.type === 'post'
          });

          // if node has children add arrow
          var arrow = "";
          if(containerClassName.indexOf('tree-view_node-hasChildren') > -1){
            var arrow = <div key={node._id}
              className={arrowClassName}
              onClick={this.toggleCollapse.bind(null, node._id)}/>;
          }

          return <li
            className={containerClassName}
            key={node._id}>
            {arrow}
            <i draggable="true"
            onDragStart={this.handleDragStart.bind(this, node._id)}
            onDragEnter={this.handleDragEnter.bind(this, node._id)}
            onDragOver={node.type === 'node' ? this.handleDragOver : null}
            onDragLeave={this.handleDragLeave}
            onDrop={this.handleDrop}
            onDragEnd={this.handleDragEnd}
            className={iconClassName}></i> <a className={linkClassName} href={node.href}>{node.label}</a>
            {this.renderNodesList(node._id)}
          </li>;

        })}
        </ul>
      }
    } else {
      return <WarningAlert>No nodes found.</WarningAlert>;
    }
  },
  render() {
    return <div className={"row " + this.props.className}>
      <div className="col-md-12">
      {this.props.children}
      </div>
      <div className="col-md-12">
        <FormGroup><FormControl
          showLabel={ true }
          style="input"
          type="text"
          className=""
          name="search"
          label="Search"
          onChange={ this.filterList }
          defaultValue=""
        /></FormGroup>
      </div>
      <div className="col-md-12">
      <ul className="tree-view tree-view_root"
      ><li className="tree-view_node"><i
      onDragEnter={this.handleDragEnter.bind(this, "")}
      onDragOver={this.handleDragOver}
      onDragLeave={this.handleDragLeave}
      onDrop={this.handleDrop}
      className="glyphicon glyphicon-globe"></i> <a className="tree-view_label" href="/nodes/">root</a>
      { this.renderNodesList() }
      </li></ul>
      </div>
    </div>;
  }
});
