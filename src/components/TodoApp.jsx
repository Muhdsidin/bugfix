import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editingValue, setEditingValue] = useState('');

  const handleAddTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  const handleDeleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleStartEditTodo = (index, value) => {
    setEditingIndex(index);
    setEditingValue(value);
  };

  const handleFinishEditTodo = () => {
    const newTodos = [...todos];
    newTodos[editingIndex] = editingValue;
    setTodos(newTodos);
    setEditingIndex(-1);
    setEditingValue('');
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <div className="input-wrapper">
        <input type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <div className="editing-wrapper">
                <input type="text" value={editingValue} onChange={e => setEditingValue(e.target.value)} />
                <button onClick={handleFinishEditTodo}>Save</button>
              </div>
            ) : (
              <div className="todo-wrapper">
                {todo}
                <div className="actions-wrapper">
                  <button onClick={() => handleStartEditTodo(index, todo)}>Edit</button>
                  <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
