import PublicNavigation from '../components/PublicNavigation.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor} = context();
  var items = {
    right: [
      { uid: 'users.login', href: '/login', label: 'Login' }
    ]
  }
  onData(null, {items});
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(PublicNavigation);
