import { hideModal } from '../../action-creators/modal';
import React, { Component } from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.onClose = this.onClose.bind(this);
    this.state = { 
        modal: false
    };
  }

  onClose() {
    this.props.hideModal();
  }

  listenKeyboard(event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
      this.props.onClose();
    }
  }

  componentDidMount() {
    if (this.props.onClose) {
      window.addEventListener('keydown', this.listenKeyboard.bind(this), true);
    }
  }

  componentWillUnmount() {
    if (this.props.onClose) {
      window.removeEventListener('keydown', this.listenKeyboard.bind(this), true);
    }
  }
  
  onOverlayClick() {
    this.props.onClose();
  }
  
  onDialogClick(event) {
    event.stopPropagation();
  }

  render() {
    return (
        <div>
        <div className="modal-overlay-div" />
        <div className="modal-content-div" onClick={this.onOverlayClick.bind(this)}>
          <div className="modal-dialog-div" onClick={this.onDialogClick}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;