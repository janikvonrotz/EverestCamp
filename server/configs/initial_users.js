import {Meteor} from 'meteor/meteor';

export default () => {
  if (Meteor.users.find().count() === 0 ) {
    Accounts.createUser({
      email: 'admin@admin.com',
      password: 'password',
      profile: {
        name:  { first: 'Admin', last: 'McAdmin' }
      }
    });
  }
};
