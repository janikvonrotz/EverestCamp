Meteor.methods({
  newNode(node) {
    check( node, Object );
    var nodeId = Nodes.insert(node);
    // add path
    node.path = getNodePath(Nodes.findOne(nodeId));
    delete node._id;
    Nodes.upsert( nodeId, {$set: node})
    return nodeId;
  },
  saveNode( node ) {
    check( node, Object );
    node.path = getNodePath(node);
    // check for loops
    var parentNode = Nodes.findOne(node.parent);
    if(parentNode && _.contains(parentNode.path, node._id)){
      throw new Meteor.Error("loop-detected", "This nodes id is in path of child node.")
    }
    let nodeId = node._id;
    delete node._id;
    Nodes.upsert( nodeId, { $set: node } );
  },
  deleteNode( node ) {
    check( node, Object );
    if(Nodes.findOne({parent: node._id})){
      throw new Meteor.Error("has-children", "This node has children.");
    };
    Nodes.remove(node._id);
  }
});
