import {Meteor} from 'meteor/meteor';
import { posts_list, posts_search, posts_single } from '/lib/posts_publications';

export default function () {

  Meteor.publish('posts.list', function (selector, options) {
    return posts_list(selector, options);
  });

  Meteor.publish( 'posts.search', function (filterText){
    return posts_search(filterText);
  });

  Meteor.publish('posts.single', function (nodeId) {
    return posts_single(nodeId);
  });
}
