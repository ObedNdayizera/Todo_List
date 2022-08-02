import React, {useState, useRef} from 'react'
import styled from 'styled-components'
import Todolist from './components/Todolist'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Buy banana and apple',
      isCompleted: false
    },
    {
      text: 'Buy mango and vocado',
      isCompleted: true
    },
    {
      text: 'Buy strawberry and blueberry',
      isCompleted: false
    }
  ])


  function TodoForm({addTodo}) {
    const inputRef = useRef(null);
    const handleSubmit = (e) => {
      e.preventDefault()
      if (inputRef.current.value === '') {
        inputRef.current.focus();
        return;
      }
      addTodo(inputRef.current.value);
    }

    return (
      <form onSubmit={ handleSubmit }>
        <p>Todo-List</p>
        <StyledInput>
          <input
            type='input'
            ref={inputRef}
            placeholder='Enter a Todo...'/>
          <button>Add</button>
        </StyledInput>
      </form>
    )
  }

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos)
  }

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  }

  return (
    <Container>
      <TodoForm addTodo={ addTodo } />
      <StyledList>
        {todos.map((todo, index) => (
          <Todolist key={index} index={index} todo={todo} completeTodo={ completeTodo } />
        ))}
      </StyledList>
    </Container>
  )
}

const Container = styled.div`
  width: 350px;
  height: 500px;
  background-color: #12343b;
  border-radius: 8px;

  form p {
    text-align: center;
    font-size: 25px;
    font-weight:bold;
    color:#fff;
    padding: 10px 0;
  }
`

const StyledList = styled.div`
  width: 300px;
  height: 350px;
  margin: 10px auto;
`

const StyledInput = styled.div`
  width: 300px;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;

  input {
    border: 1px solid #999;
    background-color: #000;
    color: #fff;
    padding: 10px 5px;
    width: 230px;
    border-radius: 5px;
  }

  button {
    width: 50px;
    padding: 12px 5px;
    border: none;
    border-radius: 5px;
    background-color: #f1af71;
    cursor: pointer;
  }
`


export default App