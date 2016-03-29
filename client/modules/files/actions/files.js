import {notify} from 'react-notify-toast';

export default {

  upload({Meteor, FlowRouter}, file) {
    Meteor.call('files.upload', file, (err) => {
      if (err) {
        notify.show(err.message, 'error');
      }
    });
  }
};
