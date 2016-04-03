import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState, ContentState, Modifier} from 'draft-js';
import marked from '../configs/marked';

import { GridRow, GridColumn } from '../../bootstrap/components/index.jsx';

export default class MarkdownEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      htmlRendered: marked(this.props.text),
      editorState: EditorState.createWithContent(ContentState.createFromText(this.props.text))
    };
    this.focus = () => this.refs.editor.focus();
  }

  upload(file, selection){
    handlePastedFiles
  }

  update(editorState) {

    var text = editorState.getCurrentContent().getPlainText();
    this.setState({
      editorState: editorState,
      htmlRendered: marked(text)
    });
    this.props.onChange({
      target: {
          value: text,
          name: this.props.name
      }
    })
  }

  handlePastedFiles(files){
    _.each(files, (file) => {
      console.log(file);
    });
  }

  handleDroppedFiles(selection, files){
    _.each(files, (file) => {
      console.log(file);
    });
  }

  render() {
    const {editorState} = this.state;
    return (
      <GridRow className="markdown-editor">
        <GridColumn className="markdown col-md-6" onClick={this.focus}>
          <Editor
            editorState={editorState}
            onChange={this.update.bind(this)}
            handlePastedFiles={this.handlePastedFiles.bind(this)}
            handleDroppedFiles={this.handleDroppedFiles.bind(this)}
            ref="editor" />
          </GridColumn>
        <GridColumn className="preview col-md-6">
          <div dangerouslySetInnerHTML={{__html: this.state.htmlRendered}} />
        </GridColumn>
      </GridRow>
    );
  }
}
