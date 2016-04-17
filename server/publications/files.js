import {Meteor} from 'meteor/meteor';
import { files_list, files_search } from '/lib/files_publications';
import {Files} from '/lib/collections';

export default function () {

  Meteor.publish('files.list', function (selector, options) {
    return files_list(selector, options);
  });

  Meteor.publish( 'files.search', function (filterText, limit){
    return files_search(filterText, limit);
  });

  Meteor.publish('files.item', function (fileId) {
    check(fileId, String);
    var selector = {_id: fileId};
    return Files.find(selector);
  });
}
