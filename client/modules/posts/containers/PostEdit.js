import PostEdit from '../components/PostEdit.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import { posts_single } from '/lib/posts_publications.js';

export const composer = ({context, postId}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('posts.single', postId).ready()) {
    const post = posts_single(postId).fetch()[0];
    if (post) {
      onData(null, {post});
    } else {
      onData();
    }
  }
};

export const depsMapper = (context, actions) => ({
  update: actions.posts.update,
  remove: actions.posts.remove,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(PostEdit);
