import {Meteor} from 'meteor/meteor';
import { nodes_list, nodes_search, nodes_single } from '/lib/nodes_publications';

export default function () {

  Meteor.publish('nodes.list', function (selector, options) {
    return nodes_list (selector, options);
  });

  Meteor.publish( 'nodes.search', function(filterText){
    return nodes_search(filterText);
  });

  Meteor.publish('nodes.single', function (nodeId) {
    return nodes_single(nodeId);
  });
}
