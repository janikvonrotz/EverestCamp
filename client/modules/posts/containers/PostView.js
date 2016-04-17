import PostView from '../components/PostView.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, postId, slug}, onData) => {
  const {Meteor, Collections} = context();
  if(Meteor.subscribe('posts.item', postId).ready()) {
    const post = Collections.Posts.findOne(postId);
    onData(null, {post});
  }
};

export const depsMapper = (context, actions) => ({
  update: actions.posts.update,
  remove: actions.posts.remove,
  redirect_slug: actions.posts.redirect_slug,
  can_access: actions.posts.can_access,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(PostView);
