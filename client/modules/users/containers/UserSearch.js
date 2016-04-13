import UserSearch from '../components/UserSearch.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(UserSearch);
