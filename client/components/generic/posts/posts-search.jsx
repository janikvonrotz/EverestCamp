PostsSearch = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    var data = {
      isLoading: true
    };
    var sub = Meteor.subscribe( 'postsSearch', this.state.query );
    if(sub.ready()){
      data.posts = Posts.find().fetch(),
      data.isLoading = false
    }
    return data
  },
  getInitialState() {
    return {
      query: ''
    }
  },
  updateQuery(e){
    this.setState({
      query: e.target.value
    });
  },
  renderLoading(){
    if(this.data.isLoading){
      return <p>Searching...</p>
    }
  },
  renderSearchResults(){
    if(!this.data.isLoading){
      return this.data.posts.map((post) => {
        return <GridColumn key={post._id} className="col-md-12">
          <h2><a href={'/posts/' + post._id + '/edit'}>{post.title}</a></h2>
          <p>{post.content.substring(0, 300)}</p>
        </GridColumn>
      });
    }else{
      <WarningAlert>No posts found.</WarningAlert>;
    }
  },
  render() {
    return <GridRow className={classNames("posts-search", this.props.className)}>
      <GridColumn className="col-md-12">
      <ContentEditable
        name="query"
        tagName="h1"
        placeholder="Search"
        className="page-header"
        shouldComponentUpdate={ true }
        onChange={ this.updateQuery }
      />
      </GridColumn>
      {this.renderLoading()}
      {this.renderSearchResults()}
    </GridRow>
  }
});
