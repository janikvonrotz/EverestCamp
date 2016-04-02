import {Files} from '/lib/collections';
import {check} from 'meteor/check';
import {slugify} from '/lib/slugify';

export function getFileName(file){
  return (slugify(file.name().slice(0, -3)) + "." + file.extension())
}

export function getThumbFileName(file){
  return (slugify(file.name().slice(0, -3)) + "-thumb." + file.extension())
}

export function files_search(filterText, limit){
  check(filterText, String);
  check(limit, String);

  var options = {sort: {uploadedAt: -1}, limit: limit}
  var selector = {'metadata.name': {$regex: filterText}};

  return Files.find(selector, options);
};

export function files_list(selector, options) {
  check(selector, Match.Optional(Object));
  check(options, Match.Optional(Object));

  if(!selector){
    const selector = {};
  }
  if(!options){
    const options = {sort: {updated: -1}};
  }
  return Files.find(selector, options);
};

export function files_single(fileId) {
  check(fileId, String);
  const selector = {_id: fileId};
  return Files.find(selector);
};
