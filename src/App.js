
import './App.css';
import { useState } from 'react';

function App() {

  const [toDo, setToDo] = useState('')
  const [toDoList, setToDoList] = useState(['Buy Milk','Go to a Movie', 'Walk the Dog', 'Watch semi final'])

  function handleTodoChange(e){
    setToDo(e.target.value)
  }

  function AddItem(){
    //setToDoList(toDoList.push(toDo))
    setToDoList([...toDoList,toDo])
  }

  return (
    <div className="App">
      <input value={toDo} onChange={handleTodoChange}/>
      <button onClick={AddItem}>Add to list</button>
      <h3>List of things to do</h3>
      <ul>
        {toDoList.map(
          toDo => (
            <li>{toDo}</li>
          )
        )

        }
      </ul>
    </div>
  );
}

export default App;
