import AuthenticatedNavigation from '../components/AuthenticatedNavigation.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor} = context();
  onData(null, {});
};

export const depsMapper = (context) => ({
  items: {
    left: [
      { uid: 'files.list', href: '/files', label: 'Files' },
      { uid: 'index', href: '/', label: 'Posts' }
    ],
    right: [
      {
        uid: 'currentUser',
        href: '#',
        label: Meteor.user().emails[0].address,
        dropdown: true,
        dropdownItems: [
          { uid: 'logout', href: '#', label: 'Logout', action: () => {
            return Meteor.logout( () => {
              FlowRouter.go( '/login' );
            });
          }}
        ]
      }
    ]
  },
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(AuthenticatedNavigation);
