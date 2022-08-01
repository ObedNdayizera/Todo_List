import React from 'react'
import styled from 'styled-components'

function Todolist({index, todo}) {
  return (
      <card>
          {
              <item>{todo.text}</item>
          }
    </card>
  )
}

const card = styled.div`
    width: 10px;
    height: 200px;
    text-align: left;
    background-color: red;
`


const item = styled.div`
    font-size: 70px;
`


export default Todolist