import { render } from '@testing-library/react';
import React, {useState,useEffect}from 'react'
import {Button,Modal} from 'react-bootstrap'
function EditModal({value, isEditing, index,editTodos}) {
    const [show, setShow] = useState(false);
    useEffect(() => {
      setShow(isEditing);
    },[isEditing])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Enter your changes:
            <input type="text" value={value}/>
          
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

render(<EditModal/>);
