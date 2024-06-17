import { useState } from 'react';

const NewTodoForm = ({ addTodo }) => {
  const [newItem, setNewItem] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (newItem === '') return;
    addTodo(newItem);
    // Add the new item
    setNewItem('');
  }

  return (
    <form className="form-row" onSubmit={handleSubmit}>
      <label htmlFor="item">New Item</label>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        id="item"
      />
      <button className="btn">Add</button>
    </form>
  );
};

export default NewTodoForm;
