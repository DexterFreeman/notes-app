import React from 'react'
import { useState } from 'react'
import "./TodoItem.scss"
const TodoItem = (props) => {
    const {text, deleteCard} = props
    const [checkbox, setCheckbox] = useState(false);

   const handleCheckbox = () => {
    setCheckbox(!checkbox);
   
   }
  return (
  
    <div className='main-content__note'>
        <input type="checkbox" onChange={handleCheckbox} name="" id="" />
        {checkbox ? <p style={{textDecoration: "line-through"}}>{text}</p> : <p>{text}</p>}
        <button className='main-content__note-btn' onClick={() => {deleteCard(text)}}>🗑</button>
    </div>
  )
}

export default TodoItem