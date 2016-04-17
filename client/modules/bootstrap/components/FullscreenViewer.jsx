import React from 'react';
import classNames from 'classnames/bind';

export default class FullscreenContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      screenClass: 'display-normal'
    };
  };

  toggleFullscreen(){
    document.getElementsByTagName('body')[0].classList.toggle('fullscreen-viewer-open');
    if(this.state.screenClass != 'display-fullscreen'){
      this.setState({screenClass: 'display-fullscreen'});
    }else{
      this.setState({screenClass: 'display-normal'});
    }
  }

  renderIcon(){
    let classes = classNames({
      'screen-icon fa fa-lg pull-xs-right': true,
      'fa-times': this.state.screenClass === 'display-fullscreen',
      'fa-arrows-alt': this.state.screenClass === 'display-normal'
    });
    return (
      <i onClick={this.toggleFullscreen.bind(this)} className={classes}></i>
    );
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
