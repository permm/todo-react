import React, {useState} from 'react'
import TodoList from './components/TodoList'

function App() {
  const [todoList, setTodoList] = useState(["test1"])
  const [text, setText] = useState("sleep")
  const onChangeText = (e)=>{
    
    setText(e.target.value)
  }
  const addTodo = ()=>{
    setTodoList([
      ...todoList,
      text
    ])
  }

  const removeTodo = (index)=>{
    let todo = [...todoList]
    todo.splice(index,1)
    setTodoList(todo)
  }

  return (
    <div className="container mx-auto h-screen bg-red-200">
      <div className='bg-red-400 p-36 '>
        
        <h1 className='text-center text-3xl'>Todo</h1>
        <div className='flex justify-center'>
        <input className='rounded' type="text" value={text} onChange={onChangeText}/>
        <button onClick={addTodo} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
        </div>
        
      </div>
      <TodoList  todoList={todoList} removeTodo={removeTodo}/>
    </div>
  );
}

export default App;
