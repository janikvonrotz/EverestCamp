import {Meteor} from 'meteor/meteor';
import { files_list, files_search } from '/lib/files_publications';
import {is_allowed} from '/lib/access_control';
import {Files} from '/lib/collections';

export default function () {

  Meteor.publish('files.list', function (selector, options) {
    if(is_allowed('file.read', this.userId)){
      return files_list(selector, options);
    }else{
      this.stop();
      return;
    }
  });

  Meteor.publish( 'files.search', function (filterText, limit){
    if(is_allowed('file.read', this.userId)){
      return files_search(filterText, limit);
    }else{
      this.stop();
      return;
    }
  });

  Meteor.publish('files.item', function (fileId) {
    check(fileId, String);
    if(is_allowed('file.read', this.userId)){
      var selector = {_id: fileId};
      return Files.find(selector);
    }else{
      this.stop();
      return;
    }
  });
}
