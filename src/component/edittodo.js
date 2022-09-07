import React from 'react';
import { Modal, Button, Form } from "react-bootstrap";

const EditTodo = ({show, handleClose, submit, content, desc, due_date, handleEditContent, handleEditDesc, handleEditDue}) => {
  return (
    <div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Edit Todo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <Form onSubmit={() => submit()}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder={content} onChange={(event) => handleEditContent(event.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder={desc} onChange={(event) => handleEditDesc(event.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword" placeholder={due_date} onChange={(event) => handleEditDue(event.target.value)}>
                            <Form.Label>Due Date</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            {/* <Button variant="primary" onClick={submit}>
                Save Changes
            </Button> */}
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default EditTodo;