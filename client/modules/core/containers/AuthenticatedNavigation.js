import AuthenticatedNavigation from '../components/AuthenticatedNavigation.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor} = context();
  if(Meteor.subscribe("user.current").ready){
    var items = {
      left: [
        { uid: 'post.list', href: '/posts', label: 'Posts' },
        { uid: 'file.list', href: '/files', label: 'Files' },
        { uid: 'user.list', href: '/users', label: 'Users' }
      ],
      right: [
        { uid: 'user.profile', href: '/profile', label: Meteor.user().profile.firstname + " " + Meteor.user().profile.lastname},
        { uid: 'user.logout', href: '#', label: 'Logout', action: () => {
          return Meteor.logout( () => {
            FlowRouter.go( '/login' );
          });
        }}
      ]
    }
    onData(null, {items});
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(AuthenticatedNavigation);
