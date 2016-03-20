import EmailVerification from '../components/EmailVerification.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, token}, onData) => {
  const {Meteor, Collections} = context();
  onData(null, {token});
};

export const depsMapper = (context, actions) => ({
  register: actions.users.verificate,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(EmailVerification);
