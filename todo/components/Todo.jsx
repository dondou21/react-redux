import { useState } from 'react';

export default function Todo() {
    const [todo, setTodo] = useState('')
    const [list, setList] = useState([])

    function handleChange(e) {
            setTodo(e.target.value )
    }
    
    function handleSubmit(e) {
            e.preventDefault();
            setList((prev) => [...prev , todo])
            setTodo('')

    }
    console.log(todo)
    console.log(list)

    const displayList = list.map((tod, index) => {
        return (
            <li key={index}>{tod}</li>
        )
    })

    return (
        <div>
            <h1>Todo App </h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={todo}
                    onChange={handleChange}
                    placeholder='Add todo'
                />

                <button>
                    Add
                </button>
            </form>
            <ul>
                {displayList}
            </ul>

        </div>
        
    )
}