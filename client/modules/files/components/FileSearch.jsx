import React from 'react';
import { GridColumn, Button, GridRow, Form, FormGroup, Input, FileUpload } from '../../bootstrap/components/index.jsx';
import {FileList} from '../containers';

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
          <Form className="form-inline">
            <FileUpload onChange={this.upload.bind(this)}/>
            <FormGroup className="pull-xs-right">
              <Input
              name="search"
              placeholder="Search"
              onChange={this.filterList.bind(this)} />
            </FormGroup>
          </Form>
        </GridColumn>
        <GridColumn className="col-md-12">
          <p></p>
          <FileList selectable={this.props.selectable} onSelected={this.props.onSelected} filterText={this.state.filterText} limit={this.state.limit} />
          <p></p>
          <Button style="primary" onClick={this.loadMore.bind(this)}>Load more</Button>
        </GridColumn>
      </GridRow>
    );
  }
}
