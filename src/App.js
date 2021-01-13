import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { Grid, Paper, Tabs, Tab } from '@material-ui/core';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const statusHandler = (e, newValue) => {
    setStatus(newValue);
  };

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    console.log(newTodos);
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

  return (
    <Grid container alignItems='center' justify='center'>
      <Grid container alignItems='center' justify='center'>
        <h1>Todo App</h1>
      </Grid>

      <Grid container alignItems='center' justify='center'>
        <Form
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
          setStatus={setStatus}
        />
      </Grid>

      <Grid container alignItems='center' justify='center'>
        <Paper square>
          <Tabs
            value={status}
            indicatorColor='primary'
            textColor='primary'
            onChange={statusHandler}
            aria-label='disabled tabs example'
          >
            <Tab label='全部' value='all' />
            <Tab label='完了済み' value='completed' />
            <Tab label='未完了' value='uncompleted' />
          </Tabs>
        </Paper>
      </Grid>

      <TodoList
        todos={todos}
        setTodos={setTodos}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
        filteredTodos={filteredTodos}
      />
    </Grid>
  );
}

export default App;
