import marked from 'marked';

var fileRender = new marked.Renderer();
fileRender.image = function (href, title, text) {
  return '<a href="/files/' + text + '/edit"><img class="img-responsive" src="' + href + '" alt="' + text + '"></a>';
};

marked.setOptions({
  gfm: true,
  tables: true
});

var marked_file_url = (file) => {
  console.log(file);
  var response = "![Upload failed.](/UploadFailed.png)";
  if(file){
    response = '![' + file._id + '](/cfs/files/files/' + file._id + ')'
  }
  return response;
};

export {marked, fileRender, marked_file_url};
