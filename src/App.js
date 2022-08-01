import React, {useState} from 'react'
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
      isCompleted: false
    },
    {
      text: 'Buy strawberry and blueberry',
      isCompleted: false
    }
  ])
  return (
    <Container>
      {todos.map((todo, index) => (
        <Todolist key={index} index={index} todo={todo} />
      ))}
    </Container>
  )
}

const Container = styled.div`
  width: 100hvh;
  height: 100vh;
  background-color: #f1af71;
  display: flex;
  flex-direction: column;
  justify-content:center  
`

export default App