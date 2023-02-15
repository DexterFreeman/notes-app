
import './App.scss';
import { useState } from 'react';
function App() {

  const [notes, setNotes] = useState([
    "Hello"
  ])
  const [inputText, setInputText] = useState("")


  const notesJSX = notes.map((note) => {
    return <div className='main-content__note'>
        <input type="checkbox" name="" id="" />
        <p>{note}</p>
        <button className='main-content__note-btn'>🗑</button>
      </div>

  })

  const handleReset = () => {
    setNotes([])
  }

  const handleAdd = () => {
    if(inputText){
      setNotes([...notes, inputText])
      setInputText("")
    }
    else {
      alert("please enter a todo")
    }
    
  }

  const handleInput = (event) => {
    console.log(event.target.value)
    setInputText(event.target.value)
   

  }

  return (
    <>
    <div className='nav-bar'>
      <h1 className="nav-bar__title">My Todos</h1>
      <button className='nav-bar__btn' onClick={handleReset}>Reset</button>
      </div>
    <div className="main-content">
      <div className='main-content__searchbar'>
        <input type="text" onChange={handleInput} className="main-content__searchBar-input" value={inputText} placeholder="Add your task here..."/>
        <button id="plus" onClick={handleAdd} className="main-content__searchBar-btn">+</button>
      </div>
      
      {notesJSX.length ? notesJSX : <p>Nothing to see here yet... Add a task in the field above! ☝️</p>}
  
    </div>
    </>
    
  );
}

export default App;
