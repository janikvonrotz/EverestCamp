export default {
  register({Meteor, LocalState}, email, password) {

    if (!email) {
      alert('Email is required.');
    }
    if (!password) {
      alert('Password is required.');
    }

    LocalState.set('ERROR', null);

    Accounts.createUser({email, password});
    FlowRouter.go('/email-verification');
} };
