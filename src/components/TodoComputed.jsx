const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
    return (
        <section className="py-4 px-4 flex justify-between bg-white rounded-b-md dark:bg-gray-800 transition-all duration-1000">
            <span className="text-gray-400">{computedItemsLeft} items</span>
            <button onClick={clearCompleted} className="text-gray-400">
                limpiar
            </button>
        </section>
    );
};

export default TodoComputed;
