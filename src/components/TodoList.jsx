import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
    return (
        <div className="bg-white rounded-t-md mt-8 overflow-hidden dark:bg-gray-800 transition-all duration-1000">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;