import {Meteor} from 'meteor/meteor';
import { posts_list, posts_search } from '/lib/posts_publications';
import {is_allowed} from '/lib/access_control';
import {Posts} from '/lib/collections';

export default function () {

  Meteor.publish('posts.list', function (selector, options) {
    if(is_allowed('post.read', this.userId)){
      var selector = !this.userId ? {public: true} : {};
      return posts_list(selector, options);
    }else{
      this.stop();
      return;
    }
  });

  Meteor.publish( 'posts.search', function (filterText){
    if(is_allowed('post.read', this.userId)){
      var selector = !this.userId ? {public: true} : {};
      return posts_search(filterText, selector);
    }else{
      this.stop();
      return;
    }
  });

  Meteor.publish('posts.item', function (postId) {
    check(postId, String);
    if(is_allowed('post.read', this.userId)){
      var selector = !this.userId ? {public: true, _id: postId} : {_id: postId};
      return Posts.find(selector);
    }else{
      this.stop();
      return;
    }
  });
}
