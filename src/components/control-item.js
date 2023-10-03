import React from 'react';

const ControlItem = () => {
  return (
    <div className='control-item'>
      <button type="button"
        className="btn btn-outline-danger btn-sm">
        <i className="fa fa-trash" />
      </button>

      <button type="button"
        className="btn btn-outline-success btn-sm">
        <i className="fa fa-exclamation" />
      </button>
    </div>
  )
}

export default ControlItem;