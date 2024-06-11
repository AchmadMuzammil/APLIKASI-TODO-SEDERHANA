// src/components/TodoItem.js
import React from 'react';

function TodoItem({ todo, onDelete }) {
    return (
        <div>
            <span>{todo.text}</span>
            <button onClick={() => onDelete(todo.id)}>Hapus</button>
        </div>
    );
}

export default TodoItem;
