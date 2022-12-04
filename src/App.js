
import './App.css';
import { useState } from 'react';

function App() {

  const [toDo, setToDo] = useState('')

  function handleTodoChange(e){
    setToDo(e.target.value)
  }

  return (
    <div className="App">
      <input value={toDo} onChange={handleTodoChange}/>
      <button>Add to list</button>
    </div>
  );
}

export default App;
