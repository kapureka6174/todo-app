import React from 'react';
import Todo from './Todo';
import { Grid } from '@material-ui/core';

const TodoList = ({
  todos,
  setTodos,
  removeTodo,
  completeTodo,
  filteredTodos,
}) => {
  return (
    <Grid container xs={4} alignItems='center' justify='center'>
      {filteredTodos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            text={todo.text}
            {...todo}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
          />
        );
      })}
    </Grid>
  );
};

export default TodoList;
