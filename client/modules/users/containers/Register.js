import Register from '../components/Register.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('ERROR');
  onData(null, {error});
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  register: actions.users.register,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Register);
