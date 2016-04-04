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

    // upload and get markdown formatted url
    var mdUrl = this.props.upload(file);

    // insert url at current position
    const editorState = this.state.editorState;
    const contentState = editorState.getCurrentContent();
    const selectionState = editorState.getSelection();
    if(!selection){selection = selectionState;}
    const cs = Modifier.insertText(contentState, selection, mdUrl)
    const es = EditorState.push(editorState, cs, 'insert-fragment');
    this.setState({editorState: es});
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
      this.upload(file);
    });
  }

  handleDroppedFiles(selection, files){
    _.each(files, (file) => {
      this.upload(file, selection);
    });
  }

  render() {
    const {editorState} = this.state;
    return (
      <GridRow className="markdown-editor">
        <GridColumn className="col-md-6" onClick={this.focus}>
          <GridColumn className="markdown">
          <Editor
            editorState={editorState}
            onChange={this.update.bind(this)}
            handlePastedFiles={this.handlePastedFiles.bind(this)}
            handleDroppedFiles={this.handleDroppedFiles.bind(this)}
            ref="editor" />
          </GridColumn>
        </GridColumn>
        <GridColumn className="col-md-6">
          <GridColumn className="preview">
          <div dangerouslySetInnerHTML={{__html: this.state.htmlRendered}} />
          </GridColumn>
        </GridColumn>
      </GridRow>
    );
  }
}
