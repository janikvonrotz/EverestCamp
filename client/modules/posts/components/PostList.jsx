import React from 'react';
import {marked, postRender} from '../configs/marked';
import slugify from '/lib/slugify';

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
          <h2><a href={'/posts/' + post._id + "/" + slugify(post.title)}>{post.title}</a></h2>
          <div className="post-content" dangerouslySetInnerHTML={ {__html: marked(post.content, {renderer: postRender})} } />
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
    if(this.props.posts && this.props.posts.length > 0 ){
      return (
        <GridRow class="post-list">
          <GridColumn className="col-md-12">
          { this.renderStyle() }
          </GridColumn>
        </GridRow>
      );
    }else{
      return (<Alert style="warning">No posts found.</Alert>);
    }
  }
}
