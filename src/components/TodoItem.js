export default function TodoItem({
    item,
    index,
    completeTodoItem,
    openModalDialog,
    deleteTodoItem,
}) {
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
                            'font-bold text-base mt-1 md:mt-0 md:text-lg whitespace-wrap ' +
                            (item.complete ? 'text-gray-400' : '')
                        }>
                        {item.todo}
                    </p>
                </div>
                <div className="flex items-center h-full space-x-2">
                    <div className="block dropdown dropdown-end md:hidden">
                        <label
                            tabIndex="0"
                            className="btn btn-circle btn-success btn-sm">
                            <svg
                                className="w-5 h-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 128 512"
                                fill="currentColor">
                                <path d="M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z" />
                            </svg>
                        </label>
                        <ul
                            tabIndex="0"
                            className="items-center px-2 py-3 space-y-3 shadow dropdown-content menu bg-base-100 rounded-box w-14">
                            <li>
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
                            </li>
                            <li>
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
                            </li>
                        </ul>
                    </div>
                    <button
                        onClick={() => openModalDialog(index)}
                        disabled={item.complete}
                        className="hidden text-white btn btn-circle btn-sm btn-warning md:flex">
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
                        className="hidden text-white btn btn-circle btn-sm btn-error md:flex">
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
