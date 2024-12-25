import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [],  // Changed from todo to todos
    addTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {},
    toggleComplete: () => {}
});

export const useTodo = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("useTodo must be used within TodoProvider");
    }
    return context;
};

export const TodoProvider = TodoContext.Provider;