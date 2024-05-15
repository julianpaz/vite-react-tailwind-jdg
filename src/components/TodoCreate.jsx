import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
    const [tittle, setTittle] = useState("");

    const handleSubmitAddTodo = (e) => {
        e.preventDefault();
        if (!tittle.trim()) {
            return setTittle("");
        }
        createTodo(tittle);
        setTittle("");
    };

    return (
        <form
            onSubmit={handleSubmitAddTodo}
            className="bg-white rounded-md overflow-hidden py-4 item-center flex gap-4 px-4 dark:bg-gray-800 transition-all duration-1000"
        >
            <span className="incline-block h-5 w-5 rounded-full border-2" />
            <input
                className="w-full text-gray-400 outline-none dark:bg-gray-800 transition-all duration-1000"
                type="text"
                placeholder="crear nuevo"
                value={tittle}
                onChange={(e) => setTittle(e.target.value)}
            />
        </form>
    );
};

export default TodoCreate;
