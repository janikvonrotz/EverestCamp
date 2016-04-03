import {Files} from '/lib/collections';
import {check} from 'meteor/check';

export function files_search(filterText, limit){
  check(filterText, String);
  check(limit, Number);

  // var options = {sort: {uploadedAt: -1}, limit: limit}
  // var selector = {'metadata.name': {$regex: filterText}};

  // cannot use consts here
  return Files.find( {'metadata.name': {$regex: filterText}}, {sort: {uploadedAt: -1}, limit: limit});
};

export function files_list(selector, options) {
  check(selector, Match.Optional(Object));
  check(options, Match.Optional(Object));

  if(!selector){
    const selector = {};
  }
  if(!options){
    const options = {sort: {uploadedAt: -1}};
  }

  // cannot use consts here
  return Files.find({}, {sort: {uploadedAt: -1}});
};

export function files_single(fileId) {
  check(fileId, String);
  // const selector = {_id: fileId};

  // cannot use consts here
  return Files.find({_id: fileId});
};
