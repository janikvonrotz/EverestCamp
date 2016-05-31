import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export function validate( user ){};

export function users_search(filterText, selector){
  check(filterText, String);
  check(selector, Match.Optional(Object));

  var filterSelector = {$or: [
    {username: {$regex: filterText}},
    {_id: {$regex: filterText}},
    {'profile.firstname': {$regex: filterText}},
    {'profile.lastname': {$regex: filterText}}
  ]};
  if(selector){
    selector = {$and: [filterSelector, selector]};
  }else{
    selector = filterSelector;
  }
  var options = {sort: {updated: -1}, limit: 20}

  return Meteor.users.find(selector, options);
};

export function users_list(selector, options) {
  check(selector, Match.Optional(Object));
  check(options, Match.Optional(Object));

  if(!selector){
    var selector = {};
  }
  if(!options){
    var options = {};
  }

  return Meteor.users.find(selector, options);
};
