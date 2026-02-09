import React, { useState } from 'react'
import { useTodo } from '../contexts'

const ToDoItems = ({ todo }) => {
  const [isToDoEditable, setIsToDoEditable] = useState(false)
  const [todoMsg, setToDoMsg] = useState(todo.todo)
  const { updateToDo, deleteToDo, toggleComplete } = useTodo()

  const editToDo = () => {
    updateToDo(todo.id, { ...todo, todo: todoMsg })
    setIsToDoEditable(false)
  }

  return (
    <div
      className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300
        ${todo.completed
          ? 'bg-green-100 dark:bg-green-900/40'
          : 'bg-gray-100 dark:bg-gray-700'}
      `}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        className="h-5 w-5 cursor-pointer accent-green-600"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />

      {/* Todo text */}
      <input
        type="text"
        className={`flex-1 bg-transparent outline-none rounded-md text-sm sm:text-base
          ${isToDoEditable
            ? 'border border-gray-300 dark:border-gray-500 px-2 py-1'
            : 'border border-transparent'}
          ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800 dark:text-gray-100'}
        `}
        value={todoMsg}
        onChange={(e) => setToDoMsg(e.target.value)}
        readOnly={!isToDoEditable}
      />

      {/* Action buttons */}
      <div className="flex gap-2">
        <button
          className={`px-3 py-1 text-sm rounded-md text-white transition
            ${todo.completed
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'}
          `}
          onClick={() => {
            if (todo.completed) return
            isToDoEditable ? editToDo() : setIsToDoEditable(true)
          }}
          disabled={todo.completed}
        >
          {isToDoEditable ? 'Save' : 'Edit'}
        </button>

        <button
          className="px-3 py-1 text-sm rounded-md bg-red-500 text-white hover:bg-red-600 transition"
          onClick={() => deleteToDo(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default ToDoItems
