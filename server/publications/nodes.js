import {Nodes} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {

  const getPath = function(node){
    if(!!node.parent){
      var parentNode = Nodes.findOne(node.parent);
    }
    var paths = [node._id];
    if(!!parentNode){
      paths = paths.concat(getPath(parentNode));
    }
    return paths;
  };

  Meteor.publish('nodes.list', function () {
    const selector = {};
    const options = {
      sort: {label: 1}
    };

    return Nodes.find(selector, options);
  });

  Meteor.publish( 'nodes.search', function(filterText){
    check(filterText, String);
    var selector = {};
    const options = {
      sort: {label: 1}
    };

    if(filterText != undefined && filterText != ''){
      var filteredNodes = [];
      selector = {label: {$regex: filterText}};
      Nodes.find(selector).fetch().map((node) => {
        filteredNodes = filteredNodes.concat(getPath(node))
      });
      selector = {_id: {$in: filteredNodes}};
      return Nodes.find(selector, options);
    }else{
      return Nodes.find(selector, options);
    }
  });

  Meteor.publish('nodes.single', function (nodeId) {
    check(nodeId, String);
    const selector = {_id: nodeId};
    return Nodes.find(selector);
  });
}
