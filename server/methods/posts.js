import {Posts, Nodes} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

import {validate} from '/lib/posts_publications';

export default function () {
  Meteor.methods({

    'posts.insert'( post ) {
      check( post, Object );
      validate( post );
      return Posts.insert( post );
    },

    'posts.update'( post ) {
      check( post, Object );
      validate( post );
      var postId = post._id
      delete post._id
      Posts.upsert( postId, { $set: post } );

      var node = Nodes.findOne({ref_id: postId});
      node.label = post.title;
      var nodeId = node._id;
      delete node._id;
      Nodes.upsert( nodeId, { $set: node } );
    },

    'posts.remove'( post ){
      check( post, Object );

      var node = Nodes.findOne({ref_id: post._id});
      if(node){
        Meteor.call('nodes.remove', node);
      }

      Posts.remove( post._id );
    }
  });
}
