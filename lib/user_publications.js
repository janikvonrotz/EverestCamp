import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export function validate( user ){};

export function user_search(filterText, selector){
  check(filterText, String);
  check(selector, Match.Optional(Object));

  var filterSelector = {$or: [
    {title: {$regex: filterText}},
    {content: {$regex: filterText}}
  ]};
  if(selector){
    selector = {$and: [filterSelector, selector]};
  }else{
    selector = filterSelector;
  }
  var options = {sort: {updated: -1}, limit: 20}

  return Meteor.users.find(selector, options);
};

export function user_list(selector, options) {
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
