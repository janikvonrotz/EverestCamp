Meteor.methods({
  newPost() {
    return Posts.insert( {} );
  },
  savePost( post ) {
    check( post, Object );
    post.slug = getSlug(post.title);
    let postId = post._id;
    delete post._id;
    Posts.upsert( postId, { $set: post } )

    var node = Nodes.findOne({ref_id: postId});
    Nodes.update(node._id, {$set: {label: post.title}});
  },
  deletePost( post ) {
    check( post, Object );
    var node = Nodes.findOne({ref_id: post._id});
    if(node){Nodes.remove(node._id)}
    Posts.remove(post._id);
  }
});
