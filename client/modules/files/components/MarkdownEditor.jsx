import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState, ContentState, Modifier} from 'draft-js';
import {FileSearch} from '../../files/containers';
import {marked, fileRender, marked_file_url} from '../configs/marked';
import { GridRow, GridColumn, Modal, Button } from '../../bootstrap/components/index.jsx';

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
      htmlRendered: marked(text, {renderer: fileRender}),
      selectedFile: null
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
    var mdUrl = marked_file_url(this.props.upload(file));
    // insert url at current position
    this.insertText(mdUrl, selection);
  }

  selectedFile(file){
    this.setState({
      selectedFile: file
    });
  }

  insertFile(event){
    var mdUrl = marked_file_url(this.state.selectedFile);
    this.toggleFileModal();
    this.insertText(mdUrl);
  }

  insertText(text, selection){
    const editorState = this.state.editorState;
    const contentState = editorState.getCurrentContent();
    const selectionState = editorState.getSelection();
    if(!selection){selection = selectionState;}
    const cs = Modifier.insertText(contentState, selection, text)
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
    document.getElementsByTagName('body')[0].classList.toggle('modal-open');
    this.setState({showFileModal: !this.state.showFileModal});
  }

  render() {
    const {editorState} = this.state;
    return (
      <GridRow className="markdown-editor">
        <GridColumn className="col-md-12">
          <p><Button onClick={this.toggleFileModal.bind(this)} style="primary">Insert File</Button></p>
        </GridColumn>
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
          onConfirm={this.insertFile.bind(this)}
          confirmLabel="Insert">
          <FileSearch selectable="true" onSelected={this.selectedFile.bind(this)}/>
        </Modal>
      </GridRow>
    );
  }
}
