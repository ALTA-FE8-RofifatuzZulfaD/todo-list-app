import React, { useState } from 'react';
import { Modal, Button, Form } from "react-bootstrap";

const AddTodo = ({show, handleClose, submit, handleContent, handleDesc, handleDue}) => {

  return (
    <div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add Todo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter your title todo.." onChange={(value) => handleContent(value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter your description todo.." onChange={(value) => handleDesc(value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword" onChange={(value) => handleDue(value)}>
                            <Form.Label>Due Date</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                        
                    </Form>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={submit}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default AddTodo;