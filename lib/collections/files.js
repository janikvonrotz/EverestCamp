import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import FS from 'meteor/cfs:filesystem'
import gm from 'meteor/cfs:graphicsmagick'

// Files = new FS.Collection("files", {
//   stores: [
//     new FS.Store.FileSystem("files", {
//       path: Meteor.settings.public.uploadFolderPath,
//       // beforeWrite: function(fileObj) {
//       //   return {name: getFileName(fileObj)};
//       // }
//     }),
//     new FS.Store.FileSystem("thumbs", {
//       path: Meteor.settings.public.uploadFolderPath,
//       // beforeWrite: function(fileObj) {
//       //   return {name: getThumbFileName(fileObj)};
//       // },
//       transformWrite: function(fileObj, readStream, writeStream) {
//         // Transform the image into a 300x300 thumbnail
//         gm(readStream, fileObj.name()).resize('300', '300').stream().pipe(writeStream);
//       }
//     }),
//   ],
//   filter: {
//     allow: {
//       contentTypes: ['image/*'] //allow only images in this FS.Collection
//     }
//   }
// });
//
// Files.allow({
//   insert: () => true,
//   update: () => true,
//   remove: () => true,
//   download: () => true
// });
