import React from "react";
import { createContext,useContext } from "react";

export const ToDoContext = createContext({
    todos: [

    ],
    addToDo : (todo) => {},
    updateToDo : (id,todo) => {},
    deleteToDo : (id) => {},
    toggleComplete : (id) => {}
})

export const useTodo = () => {
    return useContext(ToDoContext)
}

export const TodoProvider = ToDoContext.Provider