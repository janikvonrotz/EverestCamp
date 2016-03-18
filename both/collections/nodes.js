Nodes = new Mongo.Collection( 'nodes' );

Nodes.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Nodes.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let NodesSchema = new SimpleSchema({
  "label": {
    type: String,
    label: "Title of the node.",
    defaultValue: "Untitled Node"
  },
  "parent": {
    type: String,
    label: "Parent reference of the node.",
    optional: true,
  },
  "ref_id": {
    type: String,
    label: "Reference ID to object of another collection.",
    optional: true
  },
  "type": {
    type: String,
    label: "Type of this collection object.",
    defaultValue: "node"
  },
  "path": {
    type: [String],
    label: "Path to root node.",
    optional: true
  }
});

Nodes.attachSchema( NodesSchema );

getNodePath = function(node){
  var parentNode = Nodes.findOne(node.parent);
  var paths = [node._id];
  if(parentNode){
    paths = paths.concat(getNodePath(parentNode));
  }
  return paths;
};
