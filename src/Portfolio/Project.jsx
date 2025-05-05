import React from 'react';
import Moneytracker from '../image/Moneytracker.jpg';
import Todo from '../image/Todo.jpg';
import Image from 'react-bootstrap/Image';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './CSS/project.css';
function Project() {
    return (
        <Container id='projects'>
            <h1 className='text-center text-white mt-5' >Projects</h1>
            <Row className='project-row d-flex justify-content-center align-items-center gap-1'>

                <Col className='project-column'>
                    <Card className='project-card'>
                        <Card.Body>
                            <Image className='project-image' src={Moneytracker} ></Image>
                            <Card.Title>Moneytracker</Card.Title>
                            <Button className='project-btn'>Github</Button>
                        </Card.Body>

                    </Card>
                </Col>

                <Col>
                    <Card className='project-card'>
                        <Card.Body>
                            <Image className='project-image' src={Todo}></Image>
                            <Card.Title>Todo</Card.Title>
                            <Button className='project-btn'>Github</Button>

                        </Card.Body>
                    </Card>
                </Col>



            </Row>


        </Container >

    )
}

export default Project;