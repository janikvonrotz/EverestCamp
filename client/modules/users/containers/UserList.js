import UserList from '../components/UserList.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import { user_search } from '/lib/user_publications.js';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(UserList);
