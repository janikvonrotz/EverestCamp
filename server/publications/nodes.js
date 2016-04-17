import {Meteor} from 'meteor/meteor';
import { nodes_list, nodes_search } from '/lib/nodes_publications';
import {Nodes} from '/lib/collections';

export default function () {

  Meteor.publish('nodes.list', function (selector, options) {
    return nodes_list(selector, options);
  });

  Meteor.publish( 'nodes.search', function (filterText){
    return nodes_search(filterText);
  });

  Meteor.publish('nodes.item', function (nodeId) {
    check(nodeId, String);
    var selector = {_id: nodeId};
    return Nodes.find(selector);
  });
}
