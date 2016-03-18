Post = React.createClass({
  getPostTitle() {
    let post = this.props.post;
    if ( this.props.singlePost ) {
      return <h3>{ post.title }</h3>;
    } else {
      return <h3><a href={ `/posts/${ post._id }/${ post.slug }`}>{ post.title }</a></h3>;
    }
  },
  getHTML( markdown ) {
    if ( markdown ) {
      return { __html: marked( markdown ) };
    }
  },
  render() {
    let { formatLastUpdate } = ReactHelpers,
        post = this.props.post;

    return <div className="post">
      { this.getPostTitle() }
      <p><strong>Last Updated:</strong> { formatLastUpdate( post.updated ) } by { post.author }</p>
      <div className="post-body" dangerouslySetInnerHTML={ this.getHTML( post.content ) } />
    </div>;
  }
});
