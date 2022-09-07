import React, { useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom'
import EditTodo from '../component/edittodo';
import axios from "axios";

const DetailTodo = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const goBack = () => {
        navigate(-1);
    }
    
    // For create new Todo handling show
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    // Save new todo created
    const [editContent, setEditContent] = useState();
    const [editDesc, setEditDesc] = useState();
    const [editDue, setEditDue] = useState();

    const handleSubmitEditTodo = () => {
        var data = {
            content: editContent,
            description: editDesc,
            due: editDue
          };
          
          var config = {
            method: 'post',
            url: `https://api.todoist.com/rest/v1/tasks/${location.state.id}`,
            headers: { 
              'Authorization': 'Bearer 555a651717577c5d4c23075f51b0368182fc89c0', 
              'Content-Type': 'application/json', 
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            console.log(response.data);
          })
    }
    const handleEditContent = (e) => {
        e.preventDefault();
        setEditContent(e.target.value);
        console.log(editContent)
    };
    const handleEditDesc = (e) => {
        e.preventDefault();
        setEditDesc(e.target.value);
    };
    const handleEditDue = (e) => {
        e.preventDefault();
        setEditDue(e.target.value);
    };

  return (
    <Container className='bg-light pt-5 pb-5'>
    <div >
        <h1 className='text-center'>Your Todo</h1>
        <h4>{location.state.content}</h4>
        <p>{location.state.description}</p>
        <p>{location.state.due_date}</p>
        <p>{location.state.created}</p>
        <Button onClick={handleShow}>Edit</Button>
        <Button onClick={(value) => goBack(value)}>Go Back</Button>
        <EditTodo 
            show={show} 
            handleClose={handleClose} 
            submit={handleSubmitEditTodo} 
            content={location.state.content}
            desc={location.state.description}
            due_date={location.state.due}
            handleEditContent={handleEditContent}
            handleEditDesc={handleEditDesc}
            handleEditDue={handleEditDue}
        />
    </div>
    </Container>
  )
}

export default DetailTodo