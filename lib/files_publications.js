import {Files} from '/lib/collections';
import {check} from 'meteor/check';

export function files_search(filterText, limit){
  check(filterText, String);
  check(limit, Number);

  var selector = {$or: [
    {_id: {$regex: filterText}},
    {'metadata.name': {$regex: filterText}}
  ]};
  var options = {sort: {uploadedAt: -1}, limit: limit}

  return Files.find(selector, options);
};

export function files_list(selector, options) {
  check(selector, Match.Optional(Object));
  check(options, Match.Optional(Object));

  if(!selector){
    var selector = {};
  }
  if(!options){
    var options = {sort: {uploadedAt: -1}};
  }
  return Files.find(selector, options);
};

export function files_single(fileId) {
  check(fileId, String);
  var selector = {_id: fileId};
  return Files.find(selector);
};
