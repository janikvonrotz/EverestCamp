PostItem = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    let sub = Meteor.subscribe( 'postItem', this.props.postId );

    return {
      post: Posts.findOne( { _id: this.props.postId } ),
      ready: sub.ready()
    };
  },
  render() {
    if ( !this.data ) { return <div />; }
    if( this.data.ready && this.props.slug != this.data.post.slug){
      FlowRouter.go(`/posts/${ this.data.post._id }/${ this.data.post.slug }`);
    }
    return <GridRow>
      <GridColumn className="col-xs-12 col-sm-8 col-sm-offset-2">
        <Post singlePost={ true } post={ this.data.ready && this.data && this.data.post } />
      </GridColumn>
    </GridRow>;
  }
});
