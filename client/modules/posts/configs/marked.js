import marked from 'marked';

var postRender = new marked.Renderer();
postRender.image = function (href, title, text) {
  return '<img class="img-responsive" src="' + href + '" alt="' + text + '">';
};

marked.setOptions({
  gfm: true,
  tables: true
});

export {marked, postRender};
