import React from 'react';
import {marked, postRender} from '../configs/marked';
import { Alert, GridColumn, GridRow, Modal } from '../../bootstrap/components/index.jsx';

export default class PostList extends React.Component {

  renderTitle(post){
    if ( this.props.linkTo === "post.edit" ) {
      return(
        <h1><a href={'/posts/' + post._id + '/edit'}>{post.title}</a></h1>
      );
    }else{
      return(
        <h1><a href={'/posts/' + post._id + "/" + post.slug}>{post.title}</a></h1>
      );
    }
  }

  renderSearch(){
    return this.props.posts.map((post) => {
      return (
        <GridColumn key={post._id} className="col-md-12">
          { this.renderTitle(post) }
          <p>{post.content.substring(0, 300)}</p>
        </GridColumn>
      );
    });
  }

  renderList(){
    return this.props.posts.map((post) => {
      return (
        <GridColumn key={post._id} className="col-md-8 col-md-offset-2">
          { this.renderTitle(post) }
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
