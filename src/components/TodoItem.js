export default function TodoItem({
    item,
    index,
    completeTodoItem,
    openModalDialog,
    deleteTodoItem,
}) {
    // console.log(index);
    return (
        <div className="">
            <li className="flex items-start justify-between px-4 py-3 md:flex-row rounded-xl bg-slate-100">
                <div className="flex items-start">
                    <input
                        type="checkbox"
                        onClick={() => completeTodoItem(index)}
                        className="mt-1 mr-2 md:mr-5 checkbox checkbox-accent"
                        checked={item.complete}
                        readOnly
                    />
                    <p
                        className={
                            'font-bold text-lg whitespace-wrap ' +
                            (item.complete ? 'text-gray-400' : '')
                        }>
                        {item.todo}
                    </p>
                </div>
                <div className="flex items-center h-full space-x-2">
                    <button
                        onClick={() => openModalDialog(index)}
                        disabled={item.complete}
                        className="text-white btn btn-circle btn-sm btn-warning">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                    </button>
                    <button
                        onClick={() => deleteTodoItem(index)}
                        className="text-white btn btn-circle btn-sm btn-error">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </li>
        </div>
    );
}
