import React from 'react';

import { GridColumn, Button, GridRow, Form, FormGroup, FormControl, FileUpload } from '../../bootstrap/components/index.jsx';

import FileList from '../containers/FileList.js';

export default class FilePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
      limit: 10
    };
  };

  loadMore(event){
    this.setState({
      limit: this.state.limit + 10
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
        </GridColumn>
        <FileList selectable={this.props.selectable} filterText={this.state.filterText} limit={this.state.limit} />
        <GridColumn className="col-md-12">
          <Button style="default" onClick={this.loadMore.bind(this)}>Load more</Button>
        </GridColumn>
      </GridRow>
    );
  }
}
