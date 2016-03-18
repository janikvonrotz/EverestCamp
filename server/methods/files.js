Meteor.methods({
  newFile(file) {
    newFile = new FS.File(file);
    var fileId = Files.insert(newFile);
    return Files.findOne(fileId);
  }
});
