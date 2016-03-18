getFileName = function(file){
  return (getSlug(file.name().slice(0, -3)) + "." + file.extension())
}

getFileUrl = function(file){
  return "/cfs/files/files/" + file._id + "/" + getFileName(file)
}

getThumbFileName = function(file){
  return (getSlug(file.name().slice(0, -3)) + "-thumb." + file.extension())
}

Files = new FS.Collection("files", {
  stores: [
    new FS.Store.FileSystem("files", {
      path: Meteor.settings.public.uploadFolderPath,
      beforeWrite: function(fileObj) {
        return {name: getFileName(fileObj)};
      }
    }),
    new FS.Store.FileSystem("thumbs", {
      path: Meteor.settings.public.uploadFolderPath,
      beforeWrite: function(fileObj) {
        return {name: getThumbFileName(fileObj)};
      },
      transformWrite: function(fileObj, readStream, writeStream) {
        // Transform the image into a 300x300 thumbnail
        gm(readStream, fileObj.name()).resize('300', '300').stream().pipe(writeStream);
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
