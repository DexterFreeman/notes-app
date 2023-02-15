
import './App.scss';
import { useState, useEffect } from 'react';
import TodoItem from './components/TodoItem/TodoItem';
import NavBar from './components/NavBar/NavBar';
function App() {

  const [notes, setNotes] = useState([])
  const [inputText, setInputText] = useState("")
  

  const setDeleteCard = (text) => {
    setNotes( notes.filter(note => note !== text))
  }

  const notesJSX = notes.map((note) => {
    return <TodoItem deleteCard={setDeleteCard} text={note}></TodoItem>

  })

  const handleReset = () => {setNotes([])}

  const handleAdd = () => {
    if(inputText){
      setNotes([...notes, inputText])
      setInputText("")
    }
    else {
      alert("please enter a todo")
    }
    
  }

  const handleInput = (event) => {setInputText(event.target.value)}

  return (
    <>
    <NavBar handleReset={handleReset}/>
    <div className="main-content">
      <div className='main-content__searchbar'>
        <input type="text" onChange={handleInput} className="main-content__searchbar-input" value={inputText} placeholder="Add your task here..."/>
        <div onClick={handleAdd} className="main-content__searchbar-btn">+</div>
      </div>
      
      {notesJSX.length ? notesJSX : <p>Nothing to see here yet... Add a task in the field above! ☝️</p>}
      
    </div>
    </>
    
  );
}

export default App;
