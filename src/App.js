import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';

export default function App() {
    if (!localStorage.getItem('todoItems')) {
        localStorage.setItem('todoItems', JSON.stringify([]));
    }

    const [todoItems, setTodoItems] = useState(
        JSON.parse(localStorage.getItem('todoItems')),
    );
    const [openModal, setOpenModal] = useState(false);
    const [itemTodo, setItemTodo] = useState({});
    const [index, setIndex] = useState();

    const createTodoItem = (todo) => {
        const newTodoItems = [...todoItems, { todo, complete: false }];
        setTodoItems(newTodoItems);
        localStorage.setItem('todoItems', JSON.stringify(newTodoItems));
    };

    const deleteTodoItem = (index) => {
        const newTodoItems = [...todoItems];
        newTodoItems.splice(index, 1);
        setTodoItems(newTodoItems);
        localStorage.setItem('todoItems', JSON.stringify(newTodoItems));
    };

    const completeTodoItem = (index) => {
        const newTodoItems = [...todoItems];
        newTodoItems[index].complete === false
            ? (newTodoItems[index].complete = true)
            : (newTodoItems[index].complete = false);
        setTodoItems(newTodoItems);
        localStorage.setItem('todoItems', JSON.stringify(newTodoItems));
    };

    const openModalDialog = (index) => {
        const newTodoItems = [...todoItems];
        const item = newTodoItems[index];
        setItemTodo(item);
        setIndex(index);
        setOpenModal(!openModal);
    };

    const updateTodoItem = (todo, index) => {
        const newTodoItems = [...todoItems];
        const item = newTodoItems[index];
        let todoObj = { todo, complete: item.complete };
        newTodoItems.splice(index, 1, todoObj);
        setTodoItems(newTodoItems);
        setOpenModal(false);
        localStorage.setItem('todoItems', JSON.stringify(newTodoItems));
    };

    return (
        <div className="px-3">
            <div className="max-w-4xl px-10 pb-20 mx-auto mt-10 border shadow-lg card bg-base-100">
                <h1 className="mt-5 mb-10 text-2xl font-bold text-center text-gray-700 capitalize ">
                    write it✍️ and do it💪
                </h1>
                <TodoInput createTodoItem={createTodoItem} todo="" />
                <ul className="mt-10 space-y-2">
                    {todoItems.map((item, index) => (
                        <TodoItem
                            key={index}
                            index={index}
                            item={item}
                            deleteTodoItem={deleteTodoItem}
                            completeTodoItem={completeTodoItem}
                            openModalDialog={openModalDialog}
                        />
                    ))}
                </ul>

                {/* modal */}
                <input
                    type="checkbox"
                    id="my-modal-3"
                    className="modal-toggle"
                    checked={openModal}
                    readOnly
                />
                <div className="items-start modal">
                    <div className="relative top-20 modal-box">
                        <label
                            onClick={() => {
                                setOpenModal(false);
                            }}
                            htmlFor="my-modal-3"
                            className="absolute text-white btn btn-error btn-sm btn-circle right-2 top-2">
                            ✕
                        </label>
                        <h3 className="mb-5 text-lg font-bold">Update Task</h3>
                        <TodoInput
                            updateTodoItem={updateTodoItem}
                            todo={itemTodo.todo ?? ''}
                            index={index}
                        />
                    </div>
                </div>
            </div>
            <p className="mt-5 text-center text-gray-500">
                Created with{' '}
                <a
                    href="https://tailwindcss.com/"
                    className="font-medium text-sky-600 hover:underline">
                    TailwindCSS
                </a>{' '}
                and{' '}
                <a
                    href="https://daisyui.com/"
                    className="font-medium text-amber-400 hover:underline">
                    DaisyUI
                </a>
            </p>
        </div>
    );
}
