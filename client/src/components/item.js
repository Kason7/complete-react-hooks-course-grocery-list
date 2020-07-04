import React from 'react';
import './item.css';

export const item = (props) => {
  return (
    <div className='item-style'>
      {props.isEditable ? (
        <input defaultValue={props.name}></input>
      ) : (
        <div>
          <p className='small-text'>(Double click name to edit)</p>
          <h3 onDoubleClick={props.edit}>{props.name}</h3>
        </div>
      )}
      <h3>{props.calories}</h3>
      <button name={props.name} onClick={props.delete}>
        Remove
      </button>
    </div>
  );
};

export default item;
