import NodeInsert from '../components/NodeInsert.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('ERROR');
  onData(null, {error});
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  insert: actions.nodes.insert,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NodeInsert);
