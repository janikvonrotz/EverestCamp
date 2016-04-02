import React from 'react';

import { Alert, GridColumn, GridRow } from '../../bootstrap/components/index.jsx';

export default class FileList extends React.Component {

  handleFileClick(file, event){
    if(this.props.selectable){
      // add class to selected image
      var el = document.getElementsByClassName("img-thumbnail");
      if(el.length > 0){el[0].classList.remove("img-thumbnail")}
      e.target.classList.add("img-thumbnail");
    }
  }

  renderThumbnail(file){
    return (
      <GridColumn key={file._id} className="col-lg-3 col-md-4 col-xs-6 thumb">
        <a onClick={this.handleFileClick.bind(this, file)} href={!this.props.selectable ? file.href : ""}>
          <img className="img-responsive" src={file.src} alt={file.label} />
        </a>
      </GridColumn>
    );
  }

  renderGallery(){
    if ( this.props.files && this.props.files.length > 0 ) {
      return (
        <GridColumn className="col-md-12">
          {this.props.files.map((file) => {
            return this.renderThumbnail.bind(this, file);
          })}
        </GridColumn>
      );
    }else{
      return (
        <GridColumn className="col-md-12">
          <Alert style="warning">No files found.</Alert>
        </GridColumn>
      );
    }
  }

  render() {
    return (
      <GridRow className="file-list">
        {this.renderGallery.bind(this)}
      </GridRow>
    );
  }
}
