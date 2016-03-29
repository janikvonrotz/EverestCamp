import {Posts, Nodes} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

import {validate} from '/lib/posts_publications';

export default function () {
  Meteor.methods({

    'posts.insert'( post, nodeId ) {
      check( post, Object );
      check( nodeId, String);
      validate( post );

      var postId = Posts.insert( post );
      var node = {
        label: "Untitled Post",
        parent: nodeId,
        ref_id: postId,
        type: "post"
      }

      Meteor.call('nodes.insert', node, (err) => {
        if (err) {
          Meteor.call('posts.remove', {_id: postId});
          throw new Meteor.Error(err.reason, err.message);
        }
      });

      return postId;
    },

    'posts.update'( post ) {
      check( post, Object );
      validate( post );
      var postId = post._id
      delete post._id
      Posts.upsert( postId, { $set: post } );
    },

    'posts.remove'( post ){
      check( post, Object );

      var node = Nodes.find({ref_id: post._id});
      if(node){
        Meteor.call('nodes.remove', node);
      }

      Posts.remove( post._id );
    }
  });
}
