import {notify} from 'react-notify-toast';
import {Files} from '/lib/collections'

export default {

  upload({Meteor, FlowRouter}, file) {

    var newFile = new FS.File(file);
    newFile.metadata = {name: newFile.name()};

    Files.insert(newFile, (err, res) => {
        if (err) {
            notify.show(err.message, 'error');
        }
    });
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
