import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
    return (
        <div className="min-h-screen bg-gray-300 bg-[url('./images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
            <header className="container mx-auto px-4 pt-8">
                <div className="flex justify-between">
                    <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">
                        TODO
                    </h1>
                    <button>
                        <MoonIcon />
                    </button>
                </div>
                <form className="bg-white rounded-md overflow-hidden py-4 item-center flex gap-4 px-4 mt-8">
                    <span className="incline-block h-5 w-5 rounded-full border-2" />
                    <input
                        className="w-full text-gray-400 outline-none"
                        type="text"
                        placeholder="crear nuevo"
                    />
                </form>
            </header>
            <main className="container mx-auto px-4 mt-8">
                <div className="bg-white rounded-md">
                    <article className="flex gap-4 py-4 px-4 border-b border-b-gray-400">
                        <button className="incline-block h-5 w-5 rounded-full border-2 flex-none" />
                        <p className="text-gray-500 grow ">completado</p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex gap-4 py-4 px-4 border-b border-b-gray-400">
                        <button className="incline-block h-5 w-5 rounded-full border-2 flex-none" />
                        <p className="text-gray-500 grow ">completado</p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex gap-4 py-4 px-4 border-b border-b-gray-400">
                        <button className="incline-block h-5 w-5 rounded-full border-2 flex-none" />
                        <p className="text-gray-500 grow ">completado</p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <section className="py-4 px-4 flex justify-between">
                        <span className="text-gray-400">5 items</span>
                        <button className="text-gray-400">limpiar</button>
                    </section>
                </div>
            </main>
            <section className="container mx-auto px-4 mt-8">
                <div className=" bg-white p-4 rounded-md flex justify-center gap-4">
                    <button className="text-blue-600">All</button>
                    <button className="hover:text-blue-600">Active</button>
                    <button className="hover:text-blue-600">Completed</button>
                </div>
            </section>
            <p className="text-center mt-8">Drag and drop to reader list</p>
        </div>
    );
};

export default App;
