import React from 'react'
export default function TodoList({todos,handleComplete}) {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {
          todos.map((todo)=>{
          return ( <li key={todo.id}>

              <p>{todo.text}</p>
              {
                !todo.completed &&  <button onClick={()=>handleComplete(todo.id)}>Complete</button>
              }
              
            </li>)
          })
        }
      </ul>
    </div>
  )
}
