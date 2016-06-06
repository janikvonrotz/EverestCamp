import {Files} from '/lib/collections';
import slugify from '/lib/slugify';
import {cannot_access, redirect_login, redirect_verify} from '/lib/access_control';

export default {

  upload({Meteor, FlowRouter, Notification}, file) {

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

    return Files.insert(file, (err, res) => {
        if (err) {
          Notification.alert(3, err.message, 2.5);
        }
    });
  },

  remove({Meteor, FlowRouter, Notification}, file) {
    Files.remove(file._id, ( err, res ) => {
      if (err) {
        Notification.alert(3, err.message, 2.5);
      } else {
        FlowRouter.go( '/files' );
      }
    });
  },

  update({Meteor, FlowRouter, Notification}, fileId, fields) {
    Files.update({_id: fileId}, {$set: fields}, (err, res) => {
      if(err) {
        Notification.alert(3, err.message, 2.5);
      }
    });
  },

  access_route(routename, redirect) {
    if(redirect_login(routename)){
      redirect('/login');
    } else if(redirect_verify()){
      redirect('/email-verification');
    } else if(cannot_access(routename)){
      redirect('/');
    }
  },

  can_access({Meteor, FlowRouter, Notification}, routename){
    return !cannot_access(routename);
  }
};
