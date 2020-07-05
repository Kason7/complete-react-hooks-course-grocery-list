import React, { useState } from 'react';

export const IncomeForm = () => {
  const [name, setName] = useState('');
  const [income, setIncome] = useState('high');

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const incomeChangeHandler = (event) => {
    setIncome(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log('submitted', name, income);
    setName('');
    setIncome('');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <span>Name: </span>
        <input type='text' value={name} onChange={nameChangeHandler}></input>
      </div>
      <div>
        <span>Income: </span>
        <select value={income} onChange={incomeChangeHandler}>
          <option value='high'>High</option>
          <option value='mid'>Mid</option>
          <option value='low'>Low</option>
        </select>
      </div>
      <input type='submit' value='submit'></input>
    </form>
  );
};

export default IncomeForm;
