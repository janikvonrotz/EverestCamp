import React from 'react';
import classNames from 'classnames/bind';

export default class Modal extends React.Component {
  render() {
    return(
      <div className={classNames('row', this.props.className)}>
        { this.props.children }
      </div>
    );
  }
}


// import React from 'react';
// import classNames from 'classnames/bind';
//
// import { Button } from './index.jsx';
//
// export default class Dialog extends React.Component {
//
//   renderFooter(){
//     if(!this.props.footer){
//       return (
//         <div className="modal-footer">
//           <Button style="primary" onClick={this.props.onConfirm}>{this.props.confirmLabel}</Button>
//           <Button style="default" onClick={this.props.onCancel}>{this.props.cancelLabel}</Button>
//         </div>
//       );
//     }else{
//       return <div className="modal-footer">{this.props.footer}</div>
//     }
//   }
//
//   render() {
//     var modalClassName = classNames({
//       "modal": true,
//       "show-modal": this.props.showModal
//     });
//     return(
//       <div className={modalClassName}>
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <Button className="close" onClick={this.props.onCancel} ariaLabel="Close"><span aria-hidden="true">&times;</span></Button>
//               <h4 className="modal-title">{this.props.title}</h4>
//             </div>
//             <div className="modal-body">
//               {this.props.children}
//             </div>
//             {this.renderFooter()}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
