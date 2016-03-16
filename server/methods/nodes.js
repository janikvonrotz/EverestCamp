import {Nodes} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'nodes.insert'(node) {
      check( node, Object );
      var nodeId = Nodes.insert(node);
      // Nodes.insert(node);

      node.path = Nodes.getPath(Nodes.findOne(nodeId));
      Nodes.upsert( nodeId, {$set: node})
      return nodeId;
    }
  });
}
