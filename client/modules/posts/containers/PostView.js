import PostView from '../components/PostView.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, postId}, onData) => {
  const {Meteor, Collections} = context();
  if(Meteor.subscribe('posts.item', postId).ready()) {
    const post = Collections.Posts.findOne(postId);
    onData(null, {post});
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
)(PostView);
