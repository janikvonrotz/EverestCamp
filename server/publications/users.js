import {Meteor} from 'meteor/meteor';
import { user_list, user_search } from '/lib/user_publications';

export default function () {

  Meteor.publish('user.list', function (selector, options) {
    return user_list(selector, options);
  });

  Meteor.publish( 'user.search', function (filterText){
    return user_search(filterText);
  });
}
