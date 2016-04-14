import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';

export default class ContentEditable extends React.Component {

  shouldComponentUpdate(nextProps){
    return (nextProps.text !== ReactDOM.findDOMNode(this).innerText) && nextProps.shouldComponentUpdate;
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
        onInput: this.handleChange.bind(this),
        placeholder: this.props.placeholder,
        contentEditable: "plaintext-only", // !this.props.disabled,
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
  focus: false,
  shouldComponentUpdate: false
};
