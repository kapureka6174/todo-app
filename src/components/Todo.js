import React from 'react';
import { Button, Checkbox, Grid } from '@material-ui/core';

const Todo = ({ id, text, completed, removeTodo, completeTodo }) => {
  console.log(id);
  return (
    <Grid
      container
      alignItems='center'
      justify='space-between'
      spacing={2}
      xs={12}
    >
      <Grid item xs={2} justyfy='flex-start'>
        <Checkbox
          color='primary'
          inputProps={{ 'aria-label': 'secondary checkbox' }}
          onClick={() => completeTodo(id)}
          checked={completed}
        />
      </Grid>

      <Grid item xs={8}>
        <p>{text}</p>
      </Grid>

      <Grid item xs={2}>
        <Button
          color='secondary'
          variant='contained'
          onClick={() => removeTodo(id)}
        >
          削除
        </Button>
      </Grid>
    </Grid>
  );
};

export default Todo;
