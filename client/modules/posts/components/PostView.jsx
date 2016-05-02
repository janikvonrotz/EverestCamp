import React from 'react';
import moment from 'moment';
import {marked, postRender} from '../configs/marked';
import { GridRow, GridColumn, PageHeader, Button } from '../../bootstrap/components/index.jsx';

export default class NodeEdit extends React.Component {

  renderEditLink(post){
    if(this.props.can_access('post.edit')){
      return (
        <p className="pull-xs-right"><Button href={'/posts/' + post._id + '/edit'} style="primary">Edit</Button></p>
      );
    }
  }

  render(){
    const post = this.props.post;
    if(!post){return (<Alert style="warning">Post not found.</Alert>);}
    return(
      <GridRow className="post-view">
        <GridColumn className="col-md-8 col-md-offset-2">
          <PageHeader tag="h1">{post.title}</PageHeader>
          { this.renderEditLink(post)}
          <p>Last edited by: {post.author} at {moment(post.updated).format('MMMM Do YYYY, h:mm:ss a')}</p>
          <div dangerouslySetInnerHTML={ {__html: marked(this.props.post.content, {renderer: postRender})} } />
        </GridColumn>
      </GridRow>
    );
  }

  componentDidMount(){
    if(this.props.post){
      this.props.redirect_slug(this.props.post, this.props.slug);
    }
  }

  componentDidUpdate(){
    if(this.props.post){
      this.props.redirect_slug(this.props.post, this.props.slug);
    }
  }
}
