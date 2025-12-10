import React, { useState } from 'react'

export default function Todo() {

    const [text, setText] = useState('');
    const [state, setState] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    function addText(e) {
        setText(e.target.value);
    }

    function HandSubmit(e) {
        e.preventDefault();

        if (editIndex !== null) {
            const updatedState = [...state];
            updatedState[editIndex] = text;
            setState(updatedState);
            setEditIndex(null);

        }
        else {

            setState([...state, text]);
        }
        setText('');
    }
    function deleteBtn(id) {
        const del = state.filter((el, i) => {
            return i !== id;
        })
        setState(del);
    }

    function editBtn(id) {
        setText(state[id]);
        setEditIndex(id);
    }
    return (
        <div className='container'>
            <h1>Todo List</h1>
            <form onSubmit={HandSubmit}>
                <input type="text" placeholder='Enter The Name' value={text} onChange={addText} className='inp'/>
                <input type="Submit" value={editIndex !== null ? "Updated" : "Add"} className='btn' />

            </form>
            {
                state.map((el, i) => {
                    return <>
                    <div className="card">

                        <p style={{marginTop:"10px", fontSize:"25px"}}>{el}</p>
                        <button onClick={() => editBtn(i)} className='btn'>Edit</button>
                        <button onClick={() => deleteBtn(i)} className='btn'>Delete</button>
                    </div>
                    </>

                })
            }
        </div>
    )
}