import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {is_allowed} from '/lib/access_control';

export default function () {
  Meteor.methods({

    'user.send_verification_email'() {
      return Accounts.sendVerificationEmail(Meteor.userId());
    },

    'user.update'(field, userId) {
      check(field, Object);
      check(userId, Match.Maybe(String));

      // check current user should be updated
      if(!userId){
        userId = Meteor.userId();

        if(field["email"] != undefined){
          // Accounts.removeEmail(userId, Meteor.user().emails[0].address);

          // add new mail and send verification mail
          Accounts.addEmail(userId, field.email, false);
          Accounts.sendVerificationEmail(userId);
        }else if(field["username"] != undefined){
          Accounts.setUsername(userId, field.username);
          return field.username;
        }else{
          Meteor.users.update(userId, { $set: field } );
        }
      }else{userId}{
        is_allowed('user.update', Meteor.userId());
        Meteor.users.update(userId, { $set: field } );
      }
    }
  });
}
