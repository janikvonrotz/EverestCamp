import {Meteor} from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import {Roles} from 'meteor/alanning:roles';

export default () => {
  if (Meteor.users.find().count() === 0 ) {

    var users = [
      {
        email: 'admin@ec.com',
        username: 'admin',
        verified: true,
        password: 'password',
        firstname: 'Admin',
        lastname: 'McAdmin',
        role: 'Admin'
      },
      {
        email: 'manager@ec.com',
        username: 'manager',
        verified: true,
        password: 'password',
        firstname: 'Manager',
        lastname: 'McManager',
        role: 'Manager'
      },
      {
        email: 'author@ec.com',
        username: 'author',
        verified: true,
        password: 'password',
        firstname: 'Author',
        lastname: 'McAuthor',
        role: 'Author'
      },
    ];

    _.each(users, (user) => {

      var userId = Accounts.createUser({
        email: user.email,
        password: user.password,
        username: user.username,
        profile: {
          firstname: user.firstname,
          lastname: user.lastname
        },
        roles: [user.role]
      });

      // Roles.addUsersToRoles(userId, user.role);
      Meteor.users.update(userId, {$set: {'emails.0.verified': true}});
    });
  }
};
