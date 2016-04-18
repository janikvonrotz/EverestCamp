import {Meteor} from 'meteor/meteor';
import { user_list, user_search } from '/lib/user_publications';

export default function () {

  // Meteor.publish("userData", function () {
  //   if (this.userId) {
  //     var selector = {_id: this.userId};
  //     var options = {fields: {'firstname': 1}};
  //     return Meteor.users.find(selector, options);
  //   } else {
  //     this.ready();
  //   }
  // });

  Meteor.publish('user.list', function (selector, options) {
    return user_list(selector, options);
  });

  Meteor.publish( 'user.search', function (filterText){
    return user_search(filterText);
  });
}
