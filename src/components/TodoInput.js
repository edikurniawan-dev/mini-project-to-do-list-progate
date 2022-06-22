import { useEffect, useState } from 'react';

export default function TodoInput({
    createTodoItem,
    updateTodoItem,
    todo,
    index,
}) {
    const [value, setValue] = useState('');
    const [validation, setValidation] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [todoItems, setTodoItems] = useState(
        JSON.parse(localStorage.getItem('todoItems')),
    );

    useEffect(() => {
        return setValue(todo);
    }, [todo]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value === '') {
            setErrorMessage('Tidak boleh kosong');
            setValidation(true);
            return setTodoItems(JSON.parse(localStorage.getItem('todoItems')));
        }

        setErrorMessage('');
        setValidation(false);

        if (todo === '') {
            createTodoItem(value);
        } else {
            updateTodoItem(value, index);
        }
        setValue('');
    };

    const handleChange = (e) => {
        e.preventDefault();
        const newValue = e.target.value;
        setValue(newValue);

        if (newValue === '') {
            setErrorMessage('Can not be empty');
            setValidation(true);
            return setTodoItems(JSON.parse(localStorage.getItem('todoItems')));
        } else {
            setErrorMessage('');
            setValidation(false);
            setTodoItems(JSON.parse(localStorage.getItem('todoItems')));
        }

        for (let i = 0; i < todoItems.length; i++) {
            if (newValue === todoItems[i].todo) {
                setValidation(true);
                setErrorMessage('Todo has been exist');
                return setTodoItems(
                    JSON.parse(localStorage.getItem('todoItems')),
                );
            }
            setValidation(false);
            setErrorMessage('');
            setTodoItems(JSON.parse(localStorage.getItem('todoItems')));
        }
    };

    return (
        <div className="">
            <form onSubmit={handleSubmit} className="flex">
                <div className="flex flex-col w-full mr-3">
                    <input
                        type="text"
                        placeholder={
                            todo === '' ? 'Create todo' : 'Update todo'
                        }
                        className="w-full font-bold input input-bordered input-success"
                        value={value}
                        onChange={handleChange}
                        autoFocus
                    />
                    <label
                        className={
                            'mt-1 text-error text-sm font-bold ' +
                            (validation === true ? 'block' : 'hidden')
                        }>
                        *{errorMessage}
                    </label>
                </div>

                <button
                    onClick={handleSubmit}
                    disabled={validation}
                    className="font-bold text-white btn btn-success">
                    {todo === '' ? 'Create' : 'Update'}
                </button>
            </form>
        </div>
    );
}
