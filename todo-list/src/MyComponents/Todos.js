
import React from 'react'
import TodoItem  from './TodoItem';
function Todos (props)  {
  return (
    <div className='container'>
      <h3>ToDos list</h3>
<TodoItem todo={props.todos[0]}/>
    </div>
  )
}
export default Todos;

