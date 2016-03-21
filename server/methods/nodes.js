import {Nodes} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

import {path, validate} from '../libs/nodes';

export default function () {
  Meteor.methods({

    'nodes.insert'(node) {
      check( node, Object );
      validate( node );
      return Nodes.insert(node);
    },

    'nodes.update'(node) {
      check( node, Object );
      validate( node );
      var nodeId = node._id
      delete node._id
      Nodes.upsert( nodeId, { $set: node } );
    },

    'nodes.update_parent'(nodeId, parentId) {
      // console.log(nodeId + " -> " + parentId);
      check( nodeId, String );
      check( parentId, String);
      var node = Nodes.findOne(nodeId)
      node.parent = parentId;
      validate( node );
      delete node._id
      Nodes.upsert( nodeId, { $set: node } );
    }
  });
}
