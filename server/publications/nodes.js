import {Nodes} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {

  Meteor.publish('nodes.list', function () {
    const selector = {};
    const options = {
      sort: {label: 1}
    };

    return Nodes.find(selector, options);
  });

  Meteor.publish( 'nodes.search', function(filter){
    check(query, String);
    var selector = {};
    const options = {
      sort: {label: 1}
    };

    if(filter != undefined && filter != ''){
      var filteredNodes = [];
      selector = {label: {$regex: filter}};
      Nodes.find(selector).fetch().map((node) => {
        filteredNodes = filteredNodes.concat(node.path)
      });
      selector= {_id: {$in: filteredNodes}};
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
