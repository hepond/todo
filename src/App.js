import React, {useState,useEffect}from "react";
import "./App.css";
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './Todo'
import FormTodo from './FormTodo'


function App() {
  const [todos, setTodos] = useState([
    {
      text: "This is a sampe todo",
      isDone: false
    }
  ]);
  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos.map(todo=>todo.text)));
  //   localStorage.setItem('todos-check',JSON.stringify(todos.map(todo=>todo.isDone)));
  // },[]);
  // useEffect(() => {
  //   const localTodos = localStorage.getItem('todos');
  //   const localCheck = localStorage.getItem('todos-check');
  //   if(localTodos && localTodos.length){
  //     let newTodos = [];
  //     for(let i = 0; i < localTodos.length;i++)
  //       newTodos.push({text:localTodos[i],isDone:localCheck[i]});
  //     setTodos(newTodos);  
  //   }
  // },[]);
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    alert(`Item ${index} Removed`);
  };

  const editTodos = (index,value) => {
    const newTodos = [...todos];
    newTodos[index].text = value;
    setTodos(newTodos);
  }
  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                editTodos={editTodos}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;