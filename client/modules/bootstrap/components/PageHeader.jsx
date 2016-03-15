import React from 'react';

export default class PageHeader extends React.Component {

  renderPageHeader(){
    const headers = {
      h1: <h1 className="page-header">{ this.props.children }</h1>,
      h2: <h2 className="page-header">{ this.props.children }</h2>,
      h3: <h3 className="page-header">{ this.props.children }</h3>,
      h4: <h4 className="page-header">{ this.props.children }</h4>,
      h5: <h5 className="page-header">{ this.props.children }</h5>,
      h6: <h6 className="page-header">{ this.props.children }</h6>
    };
    return headers[ this.props.tag ];
  }

  render() {
    return this.renderPageHeader();
  }
}
