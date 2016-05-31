import PostList from '../components/PostList.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import { posts_search, posts_list } from '/lib/posts_publications.js';

export const composer = ({context, filterText}, onData) => {
  const {Meteor, Collections} = context();
  if(filterText){
    if(Meteor.subscribe('posts.search', filterText).ready()) {
      const posts = posts_search(filterText).fetch();
      onData(null, {posts});
    }
  }else{
    if(Meteor.subscribe('posts.list').ready()) {
      const posts = posts_list().fetch();
      onData(null, {posts});
    }
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(PostList);
