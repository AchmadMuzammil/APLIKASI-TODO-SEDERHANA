// src/components/TodoList.js
import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { v4 as uuidv4 } from 'uuid';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodoText, setNewTodoText] = useState('');

    const addTodo = () => {
        if (newTodoText.trim() !== '') {
            const newTodo = {
                id: uuidv4(),
                text: newTodoText,
            };
            setTodos([...todos, newTodo]);
            setNewTodoText('');
        }
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <h2>Todo List</h2>
            <input
                type="text"
                value={newTodoText}
                onChange={(e) => setNewTodoText(e.target.value)}
                placeholder="Tambahkan tugas baru"
            />
            <button onClick={addTodo}>Tambah</button>
            <div>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
                ))}
            </div>
        </div>
    );
}

export default TodoList;
