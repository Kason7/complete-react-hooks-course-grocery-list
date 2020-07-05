import React, { useEffect, useRef } from 'react';

export const MarriageForm = () => {
  const nameRef = useRef();
  const ageRef = useRef();
  const marriedRef = useRef();
  const submitRef = useRef();

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const keyPressHandle = (event) => {
    if (event.keyCode === 13 || event.keyCode === 40) {
      if (event.target.id === 'name-input') {
        ageRef.current.focus();
      }
      if (event.target.id === 'age-input') {
        marriedRef.current.focus();
      }
      if (event.target.id === 'marriage-input') {
        submitRef.current.focus();
      }
    }
  };

  const submitHandler = () => {
    alert('Form submitted');
  };

  return (
    <div className='marriage-form'>
      <div className='form-field'>
        <span>Name</span>
        <input
          id='name-input'
          ref={nameRef}
          type='text'
          onKeyDown={keyPressHandle}
        ></input>
      </div>
      <div className='form-field'>
        <span>Age</span>
        <input
          id='age-input'
          ref={ageRef}
          type='number'
          onKeyDown={keyPressHandle}
        ></input>
      </div>
      <div className='form-field'>
        <span>Married</span>
        <input
          id='marriage-input'
          ref={marriedRef}
          type='checkbox'
          onKeyDown={keyPressHandle}
        ></input>
      </div>
      <button
        onClick={submitHandler}
        ref={submitRef}
        onKeyDown={keyPressHandle}
      >
        Submit
      </button>
    </div>
  );
};

export default MarriageForm;
