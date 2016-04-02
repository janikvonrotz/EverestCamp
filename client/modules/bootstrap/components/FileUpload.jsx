import React from 'react';

import Button from './Button.jsx';
import ButtonGroup from './ButtonGroup.jsx';

export default class FormGroup extends React.Component {

  uploadFiles(){
    _.each(this.refs.input.files, (file) => {
      this.props.onChange(file);
    });
  }

  render() {
    return (
      <ButtonGroup className="file-upload">
        <input className="btn btn-default" type="file" name="file" ref="input" multiple="true"/>
        <Button type="button" onClick={this.uploadFiles.bind(this)} style="default">Upload file</Button>
      </ButtonGroup>
    );
  }
}
