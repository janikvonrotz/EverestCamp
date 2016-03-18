FilesSearch = React.createClass({
    mixins: [ ReactMeteorData ],
    getMeteorData() {
      Meteor.subscribe('filesSearch', this.state.query, this.state.limit);
      return {
        files: Files.find({}, {sort:{uploadedAt:-1}}).fetch().map( ( file ) => {
          return { _id: file._id, href: `/files/${ file._id }/edit`, src: file.url({store: "thumbs"}), label: file.metadata.name};
        })
      };
    },
    getInitialState: function() {
      return {
        query: '',
        limit: 10
      };
    },
    handleScroll(e){
        if(window.pageYOffset + window.innerHeight == document.body.offsetHeight){
            this.setState({
              limit: this.state.limit + 10
            })
        }
    },
    handleImageClick(file, e){
      if(this.props.selectable){
        // add class to selected image
        var el = document.getElementsByClassName("img-thumbnail");
        if(el.length > 0){el[0].classList.remove("img-thumbnail")}
        e.target.classList.add("img-thumbnail");
        
      }
    },
    uploadFile(file) {
        // add metadata
        var newFile = new FS.File(file);
        newFile.metadata = {name: newFile.name()};

        Files.insert(newFile, function(error, file) {
            if (error) {
                Bert.alert(error.reason, 'danger');
            }
        });
    },
    updateQuery(e){
      this.setState({
        query: e.target.value
      });
    },
    renderThumbnail(file){
      return <GridColumn key={file._id} className="col-lg-3 col-md-4 col-xs-6 thumb">
          <a onClick={this.handleImageClick.bind(this, file)} href={!this.props.selectable ? file.href : ""}>
            <img className="img-responsive" src={file.src} alt={file.label} />
          </a>
        </GridColumn>
    },
    renderGallery(){
      if ( this.data.files.length > 0 ) {
        return <GridColumn className="col-md-12">
          {this.data.files.map((file) => {
            return this.renderThumbnail(file);
          })}
          </GridColumn>;
      }else{
        return <GridColumn className="col-md-12">
        <WarningAlert>No files found.</WarningAlert>
        </GridColumn>;
      }
    },
    render(){
      return <GridRow className={classNames("files-list", this.props.className)}>
              <GridColumn className="col-md-12 clearfix">
                  <Form className="form-inline">
                  <FormGroup>
                    <FileUpload onChange={this.uploadFile}/>
                  </FormGroup>
                  <FormGroup className="pull-right">
                    <FormControl
                      showLabel={ false }
                      style="input"
                      type="text"
                      name="search"
                      label="Search"
                      onChange={this.updateQuery}
                    />
                  </FormGroup>
                  </Form>
              </GridColumn>
              {this.renderGallery()}
            </GridRow>;
    },
    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    },
    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
});
