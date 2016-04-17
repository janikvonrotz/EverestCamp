import React from 'react';
import { ContentEditable, Button, GridColumn, GridRow, Modal } from '../../bootstrap/components/index.jsx';
import { PostList } from '../containers';

export default class PostSearch extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      filterText: ''
    };
  };

  filterList(event){
    this.setState({
      filterText: event.target.value
    });
  };

  render() {
    return (
      <GridRow className="post-search">
        <GridColumn className="col-md-12">
          <ContentEditable
            name="search"
            tagName="h1"
            placeholder="Search"
            className="page-header"
            shouldComponentUpdate={ true }
            onChange={ this.filterList.bind(this) } />
        </GridColumn>
        <GridColumn className="col-md-12">
          <PostList linkTo={this.props.linkTo} style="search" filterText={this.state.filterText} />
        </GridColumn>
      </GridRow>
    );
  };
}
