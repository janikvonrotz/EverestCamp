import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({

    'user.send_verification_email'() {
      return Accounts.sendVerificationEmail(Meteor.userId());
    },

    'user.update'(field) {
      check(field, Object);

      if(field["email"] != undefined){

        Accounts.sendVerificationEmail(Meteor.userId());
      }else if(field["username"] != undefined){
        Accounts.setUsername(Meteor.userId(), field.username);
      }else{
        Meteor.users.update( Meteor.userId(), { $set: field } );
      }
    }
  });
}
