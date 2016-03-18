FileUpload = React.createClass({
  uploadFiles(){
    _.each(this.refs.input.files, (file) => {
      this.props.onChange(file);
    });
  },
  render(){
    return <ButtonGroup className="file-upload">
      <input className="btn btn-default" type="file" name="file" ref="input" multiple="true"/>
      <Button onClick={this.uploadFiles} style="default">Upload file</Button>
      </ButtonGroup>
  }
});
