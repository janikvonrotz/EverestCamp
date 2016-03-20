import ResetPassword from '../components/ResetPassword.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, token}, onData) => {
  onData(null, {token});
};

export const depsMapper = (context, actions) => ({
  reset_password: actions.users.reset_password,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ResetPassword);
