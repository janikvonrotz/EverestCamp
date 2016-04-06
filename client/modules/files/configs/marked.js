import marked from 'marked';

var fileRender = new marked.Renderer();
fileRender.image = function (href, title, text) {
  return '<a href="/files/' + text + '/edit"><img class="img-responsive" src="' + href + '" alt="' + text + '"></a>';
};

marked.setOptions({
  gfm: true,
  tables: true
});

export {marked, fileRender};
