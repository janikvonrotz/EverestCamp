import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {get_filename, get_thumb_filename} from '/lib/slugify';

const Files = new FS.Collection("files", {
  stores: [
    new FS.Store.FileSystem("files", {
      path: Meteor.settings.public.uploadFolderPath,
      beforeWrite: function(fileObj) {
        return {name: get_filename(fileObj)};
      }
    }),
    new FS.Store.FileSystem("thumbs", {
      path: Meteor.settings.public.uploadFolderPath,
      beforeWrite: function(fileObj) {
        return {name: get_thumb_filename(fileObj)};
      },
      transformWrite: function(fileObj, readStream, writeStream) {
        // Transform the image into a 300x200 thumbnail
        gm(readStream, fileObj.name()).resize('300', '200').stream().pipe(writeStream);
      }
    }),
  ],
  filter: {
    allow: {
      contentTypes: ['image/*'] //allow only images in this FS.Collection
    }
  }
});

Files.allow({
  insert: () => true,
  update: () => true,
  remove: () => true,
  download: () => true
});

export default Files;
