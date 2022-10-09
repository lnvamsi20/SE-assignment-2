import React, { useState } from 'react'
import axios from 'axios'
import { Button, Form, Alert } from 'react-bootstrap'

export default function AddNumbers() {
    const [numbers, setNumbers] = useState({ number1: 1, number2: 1 })
    const [result, setResult] = useState('')

    const SERVER_URL = 'http://localhost:5000'


    const handleNumberChange = (e) => {
        const { name, value } = e.target
        setNumbers({ ...numbers, [name]: value })
    }


    const handleSubmitNumbers = async (e) => {
        e.preventDefault()
        const { data } = await axios.post(`${SERVER_URL}/add-two-numbers`, { ...numbers })
        setResult(data)
    }

    return (
        <div className='my-5'>
            <Form onSubmit={handleSubmitNumbers}>
                <Form.Group className='mb-2'>
                    <Form.Label>Number 1</Form.Label>
                    <Form.Control type='number' name='number1' value={numbers.number1} onChange={handleNumberChange} required />
                </Form.Group>
                <Form.Group className='mb-2'>
                    <Form.Label>Number 2</Form.Label>
                    <Form.Control type='number' name='number2' value={numbers.number2} onChange={handleNumberChange} required />
                </Form.Group>
                <Button className='mb-2' type='submit'>Add</Button>
            </Form>
            {
                result ? <Alert variant='success'>{result}</Alert> : null

            }
        </div>
    )
}
