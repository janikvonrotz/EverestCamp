Meteor.methods({
  insertMethod( argument ) {
    check( argument, Object );

    try {
      var documentId = Collection.insert( argument );
      return documentId;
    } catch( exception ) {
      return exception;
    }
  },
  readMethod( argument ) {
    check( argument, String );

    var document = Collection.findOne( argument );

    if ( !document ) {
      throw new Meteor.Error( 'document-not-found', 'No documents found matching this query.' );
    }

    return document;
  },
  removeMethod( argument ) {
    check( argument, String );

    try {
      Collection.remove( argument );
    } catch( exception ) {
      return exception;
    }
  },
  updateMethod( argument ) {
    check( argument, Object );

    try {
      var documentId = Collection.update( argument._id, {
        $set: { 'key': argument.key }
      });
      return documentId;
    } catch( exception ) {
      return exception;
    }
  }
});
