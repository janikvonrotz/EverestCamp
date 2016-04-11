import {Meteor} from 'meteor/meteor';
import { posts_list, posts_search, posts_single } from '/lib/posts_publications';
import {is_allowed} from '/lib/access_control';

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

  Meteor.publish('posts.single', function (postId) {
    return posts_single(postId);
  });
}
