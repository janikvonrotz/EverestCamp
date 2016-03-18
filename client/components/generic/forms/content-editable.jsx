ContentEditable = React.createClass({
  getInitialState(){
    // by default component does not update
    return{
      shouldComponentUpdate: false
    };
  },
  getDefaultProps(){
    return {
      focus: false
    }
  },
  componentWillReceiveProps(nextProps){
    // set state for component update
    this.state.shouldComponentUpdate = nextProps.shouldComponentUpdate
  },
  shouldComponentUpdate(nextProps){
    // return true
    // only update if text is altered and update is not disabled
    return (nextProps.text !== ReactDOM.findDOMNode(this).innerText) && this.state.shouldComponentUpdate;
  },
  handleChange(){
      var text = ReactDOM.findDOMNode(this).innerText ;
      if (this.props.onChange && text !== this.props.innerText) {
          this.props.onChange({
              target: {
                  value: text,
                  name: this.props.name
              }
          });
      }
      this.props.text = text;
  },
  componentDidMount(){
    if(this.props.focus){
      ReactDOM.findDOMNode(this.refs.contentEditable).focus();
    }
  },
    render(){
        // console.log(this.state)
        return React.createElement(
          this.props.tagName || 'div',
          Object.assign({}, this.props,{
            ref: "contentEditable",
            name: this.props.name,
            className: classNames("content-editable", this.props.className),
            onPaste: this.props.onPaste,
            onDrop: this.props.onDrop,
            onInput: this.handleChange,
            placeholder: this.props.placeholder,
            // onBlur: this.handleChange,
            contentEditable: !this.props.disabled,
            dangerouslySetInnerHTML: {__html: this.props.text}
          }
        ));
    },
    componentWillUpdate(){
      // console.log("will update")
      // store current positions in variables
      // this.savedSelection = ReactHelpers.saveSelection(ReactDOM.findDOMNode(this.refs.contentEditable))
      // console.log(this.savedSelection);
    },
    componentDidUpdate(){
      // console.log("did update")
      // console.log(this.savedSelection);
      // ReactHelpers.restoreSelection(ReactDOM.findDOMNode(this.refs.contentEditable), this.savedSelection)
    }
});
