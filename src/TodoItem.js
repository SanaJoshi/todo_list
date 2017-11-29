import React from 'react';

const TodoItem = ({description, completed, onToggle})=> (
  <label>
  <input type="checkbox" checked={completed} onChange={ onToggle }/>
  {description}
  </label>
)

export default TodoItem
