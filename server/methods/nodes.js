import {Nodes} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {is_allowed} from '/lib/access_control';
import {path, validate} from '/lib/nodes_publications';

export default function () {
  Meteor.methods({

    'node.insert'(node) {
      check( node, Object );
      if(!(is_allowed('post.insert', Meteor.userId()) && node.type === 'post')){
        is_allowed('node.insert', Meteor.userId());
      }
      validate( node );
      return Nodes.insert(node);
    },

    'node.update'(node) {
      check( node, Object );
      if(!(is_allowed('post.update', Meteor.userId()) && node.type === 'post')){
        is_allowed('node.update', Meteor.userId());
      }
      validate( node );
      var nodeId = node._id
      delete node._id
      Nodes.upsert( nodeId, { $set: node } );
    },

    'node.update_parent'(nodeId, parentId) {
      check( nodeId, String );
      check( parentId, String);
      var node = Nodes.findOne(nodeId)
      if(!(is_allowed('post.update', Meteor.userId()) && node.type === 'post')){
        is_allowed('node.update_parent', Meteor.userId());
      }
      validate( node );
      node.parent = parentId;
      delete node._id
      Nodes.upsert( nodeId, { $set: node } );
    },

    'node.remove'(node){
      check( node, Object );
      if(!(is_allowed('post.remove', Meteor.userId()) && node.type === 'post')){
        is_allowed('node.remove', Meteor.userId());
      }
      if(Nodes.findOne({parent: node._id})){
        throw new Meteor.Error("has-children", "This node has children.");
      };
      Nodes.remove(node._id);
    }
  });
}
