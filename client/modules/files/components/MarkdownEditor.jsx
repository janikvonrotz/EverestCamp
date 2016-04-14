import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState, ContentState, Modifier} from 'draft-js';
import {marked, fileRender} from '../configs/marked';
import { GridRow, GridColumn, Modal } from '../../bootstrap/components/index.jsx';

export default class MarkdownEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      htmlRendered: marked(this.props.text, {renderer: fileRender}),
      editorState: EditorState.createWithContent(ContentState.createFromText(this.props.text)),
      showFileModal: false
    };
    this.focus = () => this.refs.editor.focus();
  }

  update(editorState) {
    var text = editorState.getCurrentContent().getPlainText();
    this.setState({
      editorState: editorState,
      htmlRendered: marked(text, {renderer: fileRender})
    });
    this.props.onChange({
      target: {
          value: text,
          name: this.props.name
      }
    });
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
    this.update(es);
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

  toggleFileModal(event){
    this.setState({showFileModal: !this.state.showFileModal});
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
        <Modal
          showModal={this.state.showFileModal}
          title="Files"
          onCancel={this.toggleFileModal.bind(this)}
          cancelLabel="Cancel"
          onConfirm={this.update.bind(this)}
          confirmLabel="Insert">
          <p>Please choose a file:</p>
        </Modal>
      </GridRow>
    );
  }
}
