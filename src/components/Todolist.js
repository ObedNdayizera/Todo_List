import React from 'react';
import { StyledCard } from './Todolist.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckCircle, faTrash, faTimesCircle} from '@fortawesome/free-solid-svg-icons'


function Todolist({index, todo, completeTodo}) {
  return (
      <StyledCard style={todo.isCompleted ? {color: 'red', textDecoration: 'line-through'} : {color: 'white', textDecoration: 'none'} }>
          {todo.text}
          <div>
            <FontAwesomeIcon icon={todo.isCompleted ? faCheckCircle : faTimesCircle} style={{color: '#dd380e', cursor: 'pointer', padding: '0 8px 0 4px'}} onClick={completeTodo(index)}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faTrash} style={{cursor: 'pointer', padding: '0 8px 0 0'}}></FontAwesomeIcon>
          </div>
    </StyledCard>
  )
}

export default Todolist