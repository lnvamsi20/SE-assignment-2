import React, { useState } from 'react'
import StaticImage from '../assets/static-image.jpg'
import { Card, Button, Form, Row, Col } from 'react-bootstrap'


export default function EditableCard() {
    const [isChange, setIsChange] = useState(false)
    const [cardData, setCardData] = useState({
        name: 'Lakshmi Naga Vamsi Guntupalli',
        desc: "Hello friends, my name is vamsi. I desgined this webpage for se assignment-2. This web-page mainly consists of four components. 1.Navbar which is mainly used as a header. 2.Editablecard has myname and description about this page which can be dynamically changed by the user and statc image which my pic. 3.News which is an api to provide live feed. 4.Addnumbers is mainly adding 2 numbers and printing the result. Hope you liked my page"
    })
    const [changeData, setChangeData] = useState(cardData)

    const handleInputChange = ({ target: { name, value } }) => {
        setChangeData({ ...changeData, [name]: value })
    }

    const handleComplete = () => {
        setCardData(changeData)
    }


    const toggleComplete = () => {
        if (isChange) handleComplete()

        setIsChange(prev => !prev)
    }

    return (
        <div className='my-5'>
            <Card>
                <div className='static-card'>
                    <Card.Img src={StaticImage} alt='static image' className='static-image p-1 border' />
                    <Card.Body className='p-2 px-lg-4 py-lg-5'>
                        <Card.Title>{cardData.name}</Card.Title>
                        <Card.Text>{cardData.desc}</Card.Text>
                        <Button onClick={toggleComplete} variant={isChange ? 'success' : 'dark'}>{isChange ? 'Complete' : 'Change info'}</Button>
                    </Card.Body>
                </div>
            </Card>
            {
                isChange ? <Row>
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                name='name'
                                onChange={handleInputChange}
                                value={changeData.name}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                name='desc'
                                onChange={handleInputChange}
                                value={changeData.desc}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                    : null
            }
        </div>
    )
}
