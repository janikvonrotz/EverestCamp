import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';

export default class ContentEditable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {shouldComponentUpdate: false};
  }

  componentWillReceiveProps(nextProps){
    // set state for component update
    this.state.shouldComponentUpdate = nextProps.shouldComponentUpdate
  }

  shouldComponentUpdate(nextProps){
    // return true
    // only update if text is altered and update is not disabled
    return (nextProps.text !== ReactDOM.findDOMNode(this).innerText) && this.state.shouldComponentUpdate;
  }

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
  }

  render() {
    return React.createElement(
      this.props.tagName || 'div',
      Object.assign({}, this.props,{
        ref: "contentEditable",
        name: this.props.name,
        className: classNames("content-editable", this.props.className),
        // onPaste: this.props.onPaste,
        // onDrop: this.props.onDrop,
        onInput: this.handleChange.bind(this),
        placeholder: this.props.placeholder,
        contentEditable: !this.props.disabled,
        dangerouslySetInnerHTML: {__html: this.props.text}
      }
    ));
  }

  componentDidMount(){
    if(this.props.focus){
      ReactDOM.findDOMNode(this.refs.contentEditable).focus();
    }
  }
};

ContentEditable.defaultProps =  {
  focus: false
};
