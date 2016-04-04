import PublicNavigation from '../components/PublicNavigation.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor} = context();
  onData(null, {});
};

export const depsMapper = (context) => ({
  items: {
    right: [
      { uid: 'users.login', href: '/login', label: 'Log In' }
    ]
  },
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(PublicNavigation);
