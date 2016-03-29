import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';

import { GridRow, GridColumn } from '../../bootstrap/components/index.jsx';

export default class MarkdownEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      htmlRendered: '<h1>Content</h1>',
      editorState: EditorState.createEmpty()
    };
    this.onChange = (editorState) => this.setState({editorState});
  }

  render() {
    const {editorState} = this.state;
    return (
      <GridRow className="markdown-editor">
        <GridColumn className="markdown col-md-6">
          <Editor
            editorState={editorState}
            onChange={this.onChange} />
        </GridColumn>
        <GridColumn className="preview col-md-6">
          <div dangerouslySetInnerHTML={{__html: this.state.htmlRendered}} />
        </GridColumn>
      </GridRow>
    );
  }
}
