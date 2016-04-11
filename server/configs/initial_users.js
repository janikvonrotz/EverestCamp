import {Meteor} from 'meteor/meteor';

export default () => {
  if (Meteor.users.find().count() === 0 ) {

    var users = [
      {
        email: 'admin@ec.com',
        password: 'password',
        profile: {
          name:  { first: 'Admin', last: 'McAdmin' }
        },
        role: 'Admin'
      },
      {
        email: 'manager@ec.com',
        password: 'password',
        profile: {
          name:  { first: 'Manager', last: 'McManager' }
        },
        role: 'Manager'
      },
      {
        email: 'author@ec.com',
        password: 'password',
        profile: {
          name:  { first: 'Author', last: 'McAuthor' }
        },
        role: 'Author'
      },
    ];

    _.each(users, (user) => {

      var id = Accounts.createUser({
        email: user.email,
        password: user.password,
        profile: { name: {first: user.profile.name.first, last: user.profile.name.last }}
      });

      Roles.addUsersToRoles(id, user.role);
    });
  }
};
