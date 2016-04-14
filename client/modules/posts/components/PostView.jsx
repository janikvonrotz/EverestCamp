import React from 'react';
import moment from 'moment';
import {marked, postRender} from '../configs/marked';
import { GridRow, GridColumn } from '../../bootstrap/components/index.jsx';

export default class NodeEdit extends React.Component {

  render(){
    const post = this.props.post;
    if(!post){return (<Alert style="warning">Post not found.</Alert>);}
    return(
      <GridRow className="post-view">
        <GridColumn className="col-md-8 col-md-offset-2">
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={ {__html: marked(this.props.post.content, {renderer: postRender})} } />
          <p>Last edited by: {post.author} at {moment(post.updated).format('MMMM Do YYYY, h:mm:ss a')}</p>
        </GridColumn>
      </GridRow>
    );
  }
}
