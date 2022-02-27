import React from "react";
import reactDom from "react-dom";
import classes from "./Modal.module.css";

const ModalPortal = (props) => {
  return (
    <div className={classes.modalContainer}>
      <div className={classes.backdrop} onClick={props.onClose}></div>
      <div className={classes.modalSubContainer}>
        <div className={classes.modal}>
          <div className={classes.modalTitle}>
            <h3>Modal Title</h3>
            <hr />
          </div>
          <div className={classes.modalContent}>
            <div>{props.children}</div>
          </div>
          <div className={classes.modalFooter}>
            <button className="btn btn-primary">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {reactDom.createPortal(
        <ModalPortal onClose={props.onClose}>{props.children}</ModalPortal>,
        document.getElementById("detailData")
      )}
    </>
  );
};

export default Modal;
