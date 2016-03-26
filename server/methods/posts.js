import {Posts} from '/lib/collections';
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
    },

    'posts.remove'( post ){
      check( post, Object );
      Posts.remove( post._id );
    }
  });
}
