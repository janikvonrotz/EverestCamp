import {notify} from 'react-notify-toast';
import {Files} from '/lib/collections'

export default {

  upload({Meteor, FlowRouter}, file) {
    
    var newFile = new FS.File(file);
    newFile.metadata = {name: newFile.name()};

    Files.insert(newFile, function(err, res) {
        if (err) {
            notify.show(err.message, 'error');
        }
    });
  }
};
