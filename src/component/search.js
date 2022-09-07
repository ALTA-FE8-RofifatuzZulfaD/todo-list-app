import React from 'react'
import { Form } from 'react-bootstrap'

const Search = () => {
  return (
    <div>
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Search Todo</Form.Label>
                    <Form.Control type="email" placeholder="todo title" />
                </Form.Group>
            </Form>
        </div>
    </div>
  )
}

export default Search