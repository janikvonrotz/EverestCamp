import PostSearch from '../components/PostSearch.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  onData(null, {});
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(PostSearch);
