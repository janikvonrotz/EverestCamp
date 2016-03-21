import {Nodes} from '/lib/collections';

export function path(node){
  if(!!node.parent){
    var parentNode = Nodes.findOne(node.parent);
  }
  var paths = [node._id];
  if(!!parentNode){
    paths = paths.concat(path(parentNode));
  }
  return paths;
};

export function validate(node){
  var parentNode = Nodes.findOne(node.parentId);
  if(parentNode && _.contains(path(parentNode), node._id)){
    throw new Meteor.Error("loop-detected", "This nodes id is in path of child node.")
  }
};
