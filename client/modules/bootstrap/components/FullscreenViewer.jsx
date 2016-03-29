import React from 'react';

export default class FullscreenContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      screenClass: 'display-normal'
    };
  };

  toggleFullscreen(){
    if(this.state.screenClass != 'display-fullscreen'){
      this.setState({screenClass: 'display-fullscreen'});
    }else{
      this.setState({screenClass: 'display-normal'});
    }
  }

  renderIcon(){
    if(this.state.screenClass === 'display-fullscreen'){
      return <i onClick={this.toggleFullscreen.bind(this)} className="glyphicon screen-icon glyphicon-remove" />
    }else{
      return <i onClick={this.toggleFullscreen.bind(this)} className="glyphicon screen-icon glyphicon-fullscreen" />
    }
  }

  render() {
    return(
      <div className={this.state.screenClass}>
        {this.renderIcon()}
        {this.props.children}
      </div>
    );
  }
}
