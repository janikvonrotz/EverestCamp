import {Meteor} from 'meteor/meteor';
import { users_list, users_search } from '/lib/users_publications';
import {is_allowed} from '/lib/access_control';

export default function () {

  Meteor.publish('users.list', function (selector, options) {
    if(is_allowed('user.read', this.userId)){
      return users_list(selector, options);
    }else{
      this.stop();
      return;
    }
  });

  Meteor.publish('users.search', function (filterText){
    if(is_allowed('user.read', this.userId)){
      return users_search(filterText);
    }else{
      this.stop();
      return;
    }
  });
}
