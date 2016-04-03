import React from 'react';
import marked from '../configs/marked';

import { Alert, GridColumn, GridRow, Modal } from '../../bootstrap/components/index.jsx';

export default class PostList extends React.Component {

  renderSearch(){
    return this.props.posts.map((post) => {
      return (
        <GridColumn key={post._id} className="col-md-12">
          <h2><a href={'/posts/' + post._id + '/edit'}>{post.title}</a></h2>
          <p>{post.content.substring(0, 300)}</p>
        </GridColumn>
      );
    });
  }

  renderList(){
    return this.props.posts.map((post) => {
      return (
        <GridColumn key={post._id} className="col-md-12">
          <h2><a href={'/posts/' + post._id + '/edit'}>{post.title}</a></h2>
          { marked(post.content) }
        </GridColumn>
      );
    });
  }

  renderStyle(){
    if(!this.props.style){
      return this.renderList();
    } else if(this.props.style === 'search'){
      return this.renderSearch();
    }
  }

  render() {
    if(!this.props.posts){ return (<Alert style="warning">No posts found.</Alert>);}
    return (
      <GridRow class="post-list">
        <GridColumn className="col-md-12">
        { this.renderStyle() }
        </GridColumn>
      </GridRow>
    );
  }
}
