import React, { useEffect, useState } from 'react';
import axios from "axios";
import Todo from '../component/todo';
import AddTodo from '../component/addtodo';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Search from '../component/search';


const HomePage = () => {

    const [todo, setTodo] = useState([]);
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const getData = async() => {
        var config = {
            method: 'get',
            url: 'https://api.todoist.com/rest/v1/tasks',
            headers: { 
              'Authorization': 'Bearer 555a651717577c5d4c23075f51b0368182fc89c0', 
            }
          };
        await axios(config)
          .then((response) => {
            setTodo(response.data)
          })
    };

    useEffect(() => {
        getData();
        handleDelete();
        handleSubmitAddTodo();
    }, []);

    // For create new Todo handling show
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    // Save new todo created
    const [newContent, setNewContent] = useState();
    const [newDesc, setNewDesc] = useState();
    const [newDue, setNewDue] = useState();

    const handleSubmitAddTodo = () => {
        var data = {
            content: newContent,
            description: newDesc,
            due: newDue
          };
          console.log(data)
          
          var config = {
            method: 'post',
            url: 'https://api.todoist.com/rest/v1/tasks',
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
    const handleContent = (e) => {
        setNewContent(e.target.value);
    };
    const handleDesc = (e) => {
        setNewDesc(e.target.value);
    };
    const handleDue = (e) => {
        setNewDue(e.target.value);
    };

    // Delete Function
    const handleDelete = (id) => {
        // e.preventDefault();
        var config = {
            method: 'delete',
            url: `https://api.todoist.com/rest/v1/tasks/${id}`,
            headers: { 
              'Authorization': 'Bearer 555a651717577c5d4c23075f51b0368182fc89c0', 
            }
        };
        axios(config)
        .then(function (response) {
        console.log(response.data);
        });
    }

    // Navigate to detail page
    const goToDetail = (item) => {
        navigate('/detail-todo', {
            state: {
                content: item.content,
                description: item.description,
                // due_date: item.due,
                created: item.created,
                id: item.id
            }
        })
    }

  return (
    <Container className='bg-light w-75 text-center p-5'>
        <h1>Your Todo List</h1>
        <div className='d-grid justify-content-center'>
            <div>
                <Search />
            </div>
        </div>
        <div>
            {todo.map((item) => {
                return (
                    <Todo 
                        content={item.content}
                        done={() => handleDelete(item.id)}
                        detail={() => goToDetail(item)}
                    />
                )
            })}
        </div>
        <div>
        <Button variant="primary" onClick={handleShow}>
            Add Todo
        </Button>
        <AddTodo 
            show={show} 
            handleClose={handleClose} 
            submit={handleSubmitAddTodo} 
            handleContent={handleContent}
            handleDesc={handleDesc}
            handleDue={handleDue}
        />
        </div>
    </Container>
  )
}

export default HomePage