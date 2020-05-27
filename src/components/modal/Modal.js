import React from 'react';
import ReactDOM from 'react-dom';
import AnimalForm from '../animal/AnimalForm'

const Modal = ({ isShowing, hide, history }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay" />
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p>
          Hello, I'm a modal.
        </p>
        <AnimalForm history={history} hide={hide} />
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;