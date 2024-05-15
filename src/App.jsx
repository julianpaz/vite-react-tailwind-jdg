import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStatesTodos = [
    {
        id: 1,
        tittle: "ir al gym",
        completed: false,
    },
    {
        id: 2,
        tittle: "completar curso java",
        completed: true,
    },
    {
        id: 3,
        tittle: "bañarse",
        completed: false,
    },
    {
        id: 4,
        tittle: "estudiar",
        completed: false,
    },
    {
        id: 5,
        tittle: "terminar estudios",
        completed: false,
    },
];

const App = () => {
    const [todos, setTodos] = useState(initialStatesTodos);

    const createTodo = (tittle) => {
        const newTodo = {
            id: Date.now(),
            tittle: tittle.trim(),
            completed: false,
        };

        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const [filter, setFilter] = useState("all");

    const changeFilter = (filter) => setFilter(filter);

    const filterdTodos = () => {
        switch (filter) {
            case "all":
                return todos;
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "completed":
                return todos.filter((todo) => todo.completed);
            default:
                break;
        }
    };

    return (
        <div className="min-h-screen bg-gray-300 bg-[url('./images/bg-mobile-light.jpg')] bg-contain bg-no-repeat dark:bg-gray-800 transition-all duration-1000 dark:bg-[url('./images/bg-mobile-dark.jpg')]">
            <Header />

            <main className="container mx-auto px-4 mt-8">
                <TodoCreate createTodo={createTodo} />
                <TodoList
                    todos={filterdTodos()}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />
                <TodoComputed
                    computedItemsLeft={computedItemsLeft}
                    clearCompleted={clearCompleted}
                />
                <TodoFilter changeFilter={changeFilter} filter={filter} />
            </main>

            <footer className="text-center mt-8 dark:text-gray-400">
                Drag and drop to reader list
            </footer>
        </div>
    );
};

export default App;
