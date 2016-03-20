import EmailVerification from '../components/EmailVerification.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, token}, onData) => {
  const {Meteor, Collections} = context();
  onData(null, {token});
};

export const depsMapper = (context, actions) => ({
  verify: actions.users.verify_email,
  send: actions.users.send_verification_email,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(EmailVerification);
