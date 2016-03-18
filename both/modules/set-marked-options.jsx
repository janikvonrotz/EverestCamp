let setMarkedOptions = () => {

  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true
  });
}

Modules.both.setMarkedOptions = setMarkedOptions;
