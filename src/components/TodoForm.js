import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    })
    const handleChange = e => {
        setInput(e.target.value);
    };
    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000), //creates specifc ids for each todo element
            text: input
        });
        setInput('');
    };
    if (props.edit) {
        return (<form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Update Item" value={input}
                name="text" className="todo-input edit" onChange={handleChange}
                ref={inputRef} />
            <button className="todo-button edit">Update</button>
        </form>)
    }
    else {
        return (
            <form className="todo-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Add a Todo" value={input}
                    name="text" className="todo-input" onChange={handleChange}
                    ref={inputRef} />
                <button className="todo-button">Add</button>
            </form>

        )
    }
}

export default TodoForm
