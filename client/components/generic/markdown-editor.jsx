MarkdownEditor = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        Meteor.subscribe('filesList');
        return {};
    },
    getInitialState() {
        return {
            htmlRendered: ''
        }
    },
    getDefaultProps: function() {
        return {
            allowedTypes: [
                'image/jpeg',
                'image/png',
                'image/jpg',
                'image/gif'
            ],
            defaultFileName: 'clipboard',
            defaultExtension: 'png',
            progressText: '![Uploading file...]()',
            urlText: "![#id](#url)",
            errorText: "Error uploading file",
        };
    },
    shouldComponentUpdate: function(nextProps){
      return nextProps.text !== ReactDOM.findDOMNode(this).innerText;
    },
    isFileAllowed(file) {
        if (this.props.allowedTypes.indexOf('*') === 0) {
            return true;
        } else {
            return this.props.allowedTypes.indexOf(file.type) >= 0;
        }
    },
    uploadFile(file) {

      // update filename if from clipboard
      if(!("name" in file)){
        var extension = file.type.split("/")[1];
        file = new FS.File(file);
        file.extension(extension);
        file.name(this.props.defaultFileName + "." + extension);
      }else{
        file = new FS.File(file);
      }
      // add metadata
      file.metadata = {name: file.name()};

      var component = this;
      Files.insert(file, function(error, file) {
        if (error) {
            ReactHelpers.insertTextAtCursor(component.props.errorText);
            Bert.alert(error.reason, 'danger');
        } else {
            text = component.props.urlText.replace("#id", file._id).replace("#url", getFileUrl(file));
            ReactHelpers.insertTextAtCursor(text);
            // Bert.alert('File uploaded!', 'success');
        }
      });
    },
    handlePaste(event) {
      let component = this;
      var result = false,
      items = (event.clipboardData || event.originalEvent.clipboardData).items;
      _.each(items, function(item){
        if ((item.kind === 'file') && component.isFileAllowed(item)) {
          var file = item.getAsFile();
          component.uploadFile(file);
        }
      });

      if(result){e.preventDefault();}
      return result;
    },
    handleDrop(e) {
        e.preventDefault();
        var result = false;
        let component = this;
        _.each(e.dataTransfer.files, function(file){
          if (component.isFileAllowed(file)) {
              result = true;
              // ReactHelpers.insertTextAtCursor(this.props.progressText);
              component.uploadFile(file);
          }
        });
        return result;
    },
    handleChange(e) {
        var markdown = e.target.value;
        this.updatePreview(markdown);
        this.props.onChange({
            target: {
                value: markdown,
                name: this.props.name
            }
        });
    },
    updatePreview(markdown) {
        if (markdown) {
            this.setState({
                htmlRendered: marked(markdown)
            });
        }
    },
   render() {
     return <FullscreenContainer>
        <div className={classNames("markdown-editor", this.props.className)}>
        <ContentEditable
          name={this.props.name}
          text={ this.props.defaultValue }
          tagName="pre"
          className={classNames("markdown", this.props.markdownClassName)}
          disabled={false}
          shouldComponentUpdate={this.props.shouldComponentUpdate}
          onChange={ this.handleChange }
          onPaste={this.handlePaste}
          onDrop={this.handleDrop}/>
        <div
          className={classNames("preview", this.props.previewClassName)}
          dangerouslySetInnerHTML={{__html: this.state.htmlRendered}}>
        </div>
        </div>
        </FullscreenContainer>;
    },
    componentDidMount(){
      this.updatePreview(this.props.defaultValue)
    }
});
