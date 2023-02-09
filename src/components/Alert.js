import React from 'react';

function Alert(props) {
  return (
    props.alertt && <div className={`alert alert-success alert-dismissible fade show`} role="alert">
        <strong>{props.alertt.type}</strong>:  {props.alertt.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert"
        aria-label="Close"></button>
    </div>
  )
}

export default Alert