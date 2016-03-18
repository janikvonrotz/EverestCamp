import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

const Nodes = new Mongo.Collection('nodes');

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

function getPath(node){
  var parentNode = Nodes.findOne(node.parent);
  var paths = [node._id];
  if(parentNode){
    paths = paths.concat(getPath(parentNode));
  }
  return paths;
};

let schema = new SimpleSchema({
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

Nodes.attachSchema(schema);

export default Nodes;
