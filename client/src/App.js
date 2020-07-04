import React, { useState } from 'react';
import './App.css';

// Import components
import Item from './components/item';

const initList = [
  { name: 'tomato', calories: 20 },
  { name: 'rice', calories: 30 },
  { name: 'candy', calories: 100 },
];

// Start of component
function App() {
  // State init
  const [list, setList] = useState(initList);
  const [editable, setEditable] = useState(false);

  // State methods
  const removeUnhealthy = () => {
    const listCopy = [...list];
    const filteredList = listCopy.filter((v) => v.calories < 50);
    setList(filteredList);
    console.log(filteredList);
  };
  const removeItem = (index) => {
    const listCopy = [...list];
    listCopy.splice(index, 1);
    setList(listCopy);
  };

  // Editable toggle
  const editableHandler = () => {
    setEditable(true);
  };

  // List map
  const itemsList = () =>
    list.map((itemContent, index) => {
      return (
        <Item
          key={index}
          name={itemContent.name}
          calories={itemContent.calories}
          delete={() => removeItem(index)}
          isEditable={editable}
          edit={editableHandler}
        />
      );
    });

  // Component body
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Grocery List</h1>
        {itemsList()}
        <button onClick={removeUnhealthy} className='list-button'>
          Remove unhealthy
        </button>
      </header>
    </div>
  );
}

export default App;
