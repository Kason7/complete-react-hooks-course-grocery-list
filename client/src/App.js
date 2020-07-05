import React, { useState } from 'react';
import './App.css';

// Import components
import Item from './components/item';

// Import custom hooks
import useList from './hooks/useList';

const initList = [
  { name: 'tomato', calories: 20 },
  { name: 'rice', calories: 30 },
  { name: 'candy', calories: 100 },
];

// Start of component
function App() {
  // State init
  const [editable, setEditable] = useState(false);

  // Calling custom hooks
  const items = useList(initList);

  // State method: Remove Unhealthy with Custom Hook
  const removeUnhealthy = () => {
    items.removeUnhealthy();
  };
  // State method: Remove items in list with Custom Hook
  const removeItem = (index) => {
    items.removeItem(index);
  };
  // State method: Editable toggle
  const editableHandler = () => {
    setEditable(!editable);
  };
  // State method: Save edited name with Custom Hook and Local Hook
  const saveNameHandler = (event, index) => {
    items.saveNameHandler(event, index);
    if (event.which === 13 || event.keyCode === 13) {
      setEditable(!editable);
    }
  };

  // List map
  const itemsList = () =>
    items.list.map((itemContent, index) => {
      return (
        <Item
          key={index}
          identifier={index}
          name={itemContent.name}
          calories={itemContent.calories}
          delete={() => removeItem(index)}
          isEditable={editable}
          edit={editableHandler}
          keyPress={saveNameHandler}
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
