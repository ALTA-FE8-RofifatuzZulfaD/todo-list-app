import React from 'react';
import { Button } from "react-bootstrap";

const Todo = (props) => {
  return (
    <div>
        <div className='pb-3'>{props.content}</div>
        <div className='pb-4 d-flex justify-content-center gap-3'>
            <Button className='bg-secondary border-secondary' onClick={props.done}>Done</Button>
            <Button className='bg-secondary border-secondary' onClick={props.detail}>Detail</Button>
        </div>

    </div>
  )
}

export default Todo;