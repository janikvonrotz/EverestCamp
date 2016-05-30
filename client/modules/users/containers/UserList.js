import UserList from '../components/UserList.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import { users_search, users_list } from '/lib/users_publications.js';

export const composer = ({context, filterText, limit}, onData) => {
  const {Meteor, Collections} = context();
  if(filterText){
    if(Meteor.subscribe('users.search', filterText).ready()) {
      const users = users_search(filterText).fetch().map( ( user ) => {
        return { _id: user._id, name: user.username};
      });
      onData(null, {users});
    }
  }else{
    if(Meteor.subscribe('users.list').ready()) {
      const users = users_list().fetch().map( ( user ) => {
        return { _id: user._id, name: user.username};
      });
      onData(null, {users});
    }
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(UserList);
