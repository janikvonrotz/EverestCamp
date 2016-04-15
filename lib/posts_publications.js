import {Posts} from '/lib/collections';
import {check} from 'meteor/check';

export function validate( post ){};

export function posts_search(filterText, selector){
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

  return Posts.find(selector, options);
};

export function posts_list(selector, options) {
  check(selector, Match.Optional(Object));
  check(options, Match.Optional(Object));

  if(!selector){
    var selector = {};
  }
  if(!options){
    var options = {sort: {updated: -1}, limit: 20};
  }

  return Posts.find(selector, options);
};
