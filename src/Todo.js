import React, {useState,useEffect} from 'react'
import {ToggleButton, Button, OverlayTrigger,Tooltip} from 'react-bootstrap'
function Todo({ todo, index, markTodo, removeTodo,editTodos }) {
    const [isEditing,setEditing] = useState(false);
    const [edit,setedit] = useState(todo.text);
    const handleSubmit = e => {
        e.preventDefault();
        setEditing(false);
        if (edit===todo.text) return;
        editTodos(index,edit);
        setedit(todo.text);
        
      };
    useEffect(() => {},[isEditing])  
    let editinput;
    if(isEditing) {
        editinput = <form onSubmit={handleSubmit}>
                            <input type="text" value={edit} onChange={(e) => setedit(e.target.value)}/>
                            <Button className="primary" type="submit" >Submit</Button>
                        </form>;
    }
    else{
        editinput = <div></div>;
    }
    return (
      <div className="todo">  
        <div>
        .{index+1}
          <OverlayTrigger key="top" delay={{ show: 350, hide: 200 }} placement="top" overlay={
              <Tooltip id="checkbox-tip">Toggle Button to {todo.isDone?"Un-check":"Check"}</Tooltip> 
          }>  
          <ToggleButton  id="toggle-check"
          type="checkbox"
          variant="checkbox"
          checked={todo.isDone}
          value="1" onClick={() => markTodo(index)}></ToggleButton>
          </OverlayTrigger>
          <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
          <OverlayTrigger key="right" delay={{ show: 350,hide: 200}} placement="right" overlay={
              <Tooltip id="delete-tooltip">Delete Item</Tooltip>
          }>
          <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
          </OverlayTrigger>
          <OverlayTrigger key="bottom" delay={{ show: 350, hide: 200 }} placement="bottom" overlay={
              <Tooltip id="edit-tip">Edit Item</Tooltip>
          }>
              <Button variant="secondary" onClick={() =>setEditing(true)}>Edit</Button>
          </OverlayTrigger>
          {editinput}
        </div>
      </div>
    );
  }

export default Todo

