import {Nodes} from '/lib/collections';
import {check} from 'meteor/check';

export function path(node){
  if(node.parent){
    var parentNode = Nodes.findOne(node.parent);
  }
  var paths = [node._id];
  if(parentNode){
    paths = paths.concat(path(parentNode));
  }
  return paths;
};

export function validate(node){
  var parentNode = Nodes.findOne({_id: node.parent});
  if(parentNode && _.contains(path(parentNode), node._id)){
    throw new Meteor.Error("loop-detected", "This nodes id is in path of child node.");
  }
  if(parentNode && parentNode.type != 'node'){
    throw new Meteor.Error("parent-is-post", "Parent cannot be a post.");
  }
};

export function nodes_search(filterText){
  check(filterText, String);
  var selector = {};
  const options = {
    sort: {label: 1}
  };

  if(filterText != undefined && filterText != ''){
    var filteredNodes = [];
    selector = {label: {$regex: filterText}};
    Nodes.find(selector).fetch().map((node) => {
      // console.log(node.label);
      filteredNodes = filteredNodes.concat(path(node))
    });
    selector = {_id: {$in: filteredNodes}};
    return Nodes.find(selector, options);
  }else{
    return Nodes.find(selector, options);
  }
};

export function nodes_list(selector, options) {
  check(selector, Match.Optional(Object));
  check(options, Match.Optional(Object));

  if(!selector){
    var selector = {};
  }
  if(!options){
    var options = {sort: {label: 1}};
  }
  return Nodes.find(selector, options);
};
