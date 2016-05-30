import {notify} from '../../core/libs/notify';
import {Files} from '/lib/collections';
import slugify from '/lib/slugify';
import {cannot_access, redirect_login, redirect_verify} from '/lib/access_control';

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

    return Files.insert(file, (err, res) => {
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

  can_access({Meteor, FlowRouter}, routename){
    return !cannot_access(routename);
  }
};
