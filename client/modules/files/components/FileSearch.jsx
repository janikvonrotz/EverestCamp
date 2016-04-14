import React from 'react';
import { GridColumn, Button, GridRow, Form, FormGroup, FormControl, FileUpload } from '../../bootstrap/components/index.jsx';
import FileList from '../containers/index.js';

export default class FileSearch extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
      limit: 12
    };
  };

  loadMore(event){
    this.setState({
      limit: this.state.limit + 12
    })
  }

  upload(file){
    this.props.upload(file);
  }

  filterList(event){
    this.setState({
      filterText: event.target.value
    });
  }

  render() {
    return (
      <GridRow className="file-page">
        <GridColumn className="col-md-12 clearfix">
          <FormGroup>
          <Form className="form-inline">
            <FormGroup>
              <FileUpload onChange={this.upload.bind(this)}/>
            </FormGroup>
            <FormGroup className="pull-right">
              <FormControl
                showLabel={ false }
                style="input"
                type="text"
                name="search"
                label="Search"
                onChange={this.filterList.bind(this)} />
            </FormGroup>
          </Form>
          </FormGroup>
        </GridColumn>
        <FileList selectable={this.props.selectable} filterText={this.state.filterText} limit={this.state.limit} />
        <GridColumn className="col-md-12">
          <FormGroup><Button style="default" onClick={this.loadMore.bind(this)}>Load more</Button></FormGroup>
        </GridColumn>
      </GridRow>
    );
  }
}
