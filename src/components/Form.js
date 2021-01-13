import React from 'react';
import { Button, TextField, Grid } from '@material-ui/core';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const inputTextHundler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    console.log(todos);
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <TextField
        id='outlined-basic'
        label='やるべきこと'
        variant='outlined'
        type='text'
        value={inputText}
        onChange={inputTextHundler}
      />

      <Button
        color='primary'
        variant='contained'
        type='submit'
        onClick={submitTodoHandler}
        size='large'
        style={{ marginLeft: '15px', marginTop: '6px' }}
      >
        追加
      </Button>
    </form>
  );
};

export default Form;
