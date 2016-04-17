import Profile from '../components/Profile.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const user = Meteor.user();
  onData(null, {user});
};

export const depsMapper = (context, actions) => ({
  update: actions.users.update,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Profile);
