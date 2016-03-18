FullscreenContainer = React.createClass({
  getInitialState(){
    return{
      screenClass: 'display-normal'
    };
  },
  switchFullscreen(){
    if(this.state.screenClass != 'display-fullscreen'){
      this.setState({screenClass: 'display-fullscreen'});
    }else{
      this.setState({screenClass: 'display-normal'});
    }
  },
  getIcon(){
    if(this.state.screenClass === 'display-fullscreen'){
      return <i onClick={this.switchFullscreen} className="glyphicon screen-icon glyphicon-remove" />
    }else{
      return <i onClick={this.switchFullscreen} className="glyphicon screen-icon glyphicon-fullscreen" />
    }
  },
  render() {
    return <div className={this.state.screenClass}>
    {this.getIcon()}
    {this.props.children}
    </div>
  }
});
