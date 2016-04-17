import AuthenticatedNavigation from '../components/AuthenticatedNavigation.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor} = context();
  onData(null, {});
};

export const depsMapper = (context) => ({
  items: {
    left: [
      { uid: 'post.list', href: '/posts', label: 'Posts' },
      { uid: 'file.list', href: '/files', label: 'Files' },
      { uid: 'user.list', href: '/users', label: 'Users' }
    ],
    right: [
      { uid: 'user.profile', href: '/profile', label: Meteor.user().emails[0].address },
      { uid: 'user.logout', href: '#', label: 'Logout', action: () => {
        return Meteor.logout( () => {
          FlowRouter.go( '/login' );
        });
      }}
    ]
  },
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(AuthenticatedNavigation);
