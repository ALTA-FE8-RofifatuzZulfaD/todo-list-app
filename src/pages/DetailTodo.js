import React, { useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom'
import EditTodo from '../component/edittodo';
import axios from "axios";

const DetailTodo = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState(location.state)

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

    const handleSubmitEditTodo = (e) => {
      console.log(e)  
      e.preventDefault();
        var data = {
            content: editContent,
            description: editDesc,
            due: editDue
          };
          console.log(data)
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
            goBack();
          })
    }
    const handleEditContent = (e) => {
        setEditContent(e.target.value);
        console.log(editContent)
    };
    const handleEditDesc = (e) => {
        setEditDesc(e.target.value);
    };
    const handleEditDue = (e) => {
        setEditDue(e.target.value);
    };

  return (
    <Container className='bg-light pt-5 pb-5 w-50'>
    <div >
        <h1 className='text-center'>Your Todo</h1>
        <div className='p-5'>
            <h4>{location.state.content}</h4>
            <h6>Description :</h6>
            <p>{location.state.description}</p>
            <p>{location.state.due_date}</p>
            <p>Created date : {location.state.created}</p>
            <div className='d-flex gap-3'>
                <Button className='bg-secondary border-secondary' onClick={handleShow}>Edit</Button>
                <Button className='bg-secondary border-secondary' onClick={(value) => goBack(value)}>Go Back</Button>
            </div>
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
    </div>
    </Container>
  )
}

export default DetailTodo