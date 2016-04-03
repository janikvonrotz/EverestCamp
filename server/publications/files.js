import {Meteor} from 'meteor/meteor';
import { files_list, files_search, files_single } from '/lib/files_publications';

export default function () {

  Meteor.publish('files.list', function (selector, options) {
    return files_list(selector, options);
  });

  Meteor.publish( 'files.search', function (filterText, limit){
    return files_search(filterText, limit);
  });

  Meteor.publish('files.single', function (nodeId) {
    return files_single(nodeId);
  });
}
