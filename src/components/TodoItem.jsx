import CrossIcon from "./icons/CrossIcon";
import CheckIcon from "./icons/CheckIcon";
import React from "react";

const TodoItem = React.forwardRef(
    ({ todo, removeTodo, updateTodo, ...props }, ref) => {
        const { id, tittle, completed } = todo;

        return (
            <article
                {...props}
                ref={ref}
                className="flex gap-4 py-4 px-4 border-b border-b-gray-400"
            >
                <button
                    onClick={() => updateTodo(id)}
                    className={`h-5 w-5 rounded-full border-2 flex-none ${
                        completed
                            ? "grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                            : "incline-block"
                    }`}
                >
                    {completed && <CheckIcon />}
                </button>
                <p
                    className={`text-gray-500 grow dark:text-gray-400 ${completed && "line-through"}`}
                >
                    {tittle}
                </p>
                <button onClick={() => removeTodo(id)} className="flex-none">
                    <CrossIcon />
                </button>
            </article>
        );
    }
);

export default TodoItem;
