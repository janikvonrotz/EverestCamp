import {notify} from 'react-notify-toast';
import {Files} from '/lib/collections';
import slugify from '/lib/slugify';

export default {

  upload({Meteor, FlowRouter}, file) {

    if(!("name" in file)){
      var extension = file.type.split("/")[1];
      file = new FS.File(file);
      file.extension(extension);
      file.name("clipboard." + extension);
    }else{
      file = new FS.File(file);
    }
    file.metadata = {
      name: file.name(),
      public: true
    };

    var response = "empty";
    file = Files.insert(file, (err, res) => {
        if (err) {
          notify.show(err.message, 'error');
        }
    });

    var response = "![Upload failed.](/UploadFailed.png)"
    if(file){
      response = '![' + file._id + '](/cfs/files/files/' + file._id + ')'
    }

    return response;
  },

  remove({Meteor, FlowRouter}, file) {
    Files.remove(file._id, ( err, res ) => {
      if (err) {
        notify.show(err.message, 'error');
      } else {
        FlowRouter.go( '/files' );
      }
    });
  },

  update({Meteor, FlowRouter}, fileId, fields) {
    Files.update({_id: fileId}, {$set: fields}, (err, res) => {
      if(err) {
        notify.show(err.message, 'error');
      }
    });
  }
};
