import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import about from '../image/about.jpg';
import "../index.css";


function About() {
    return (

        <Container id='about' className='d-flex justify-content-center gap-5 text-white ' style={{ marginTop: '150px' }}>

            <Row>
                <h1 className='text-center mb-5 ' style={{ color: '#d0e7ff' }}>About me</h1>
                <Col xs={12} md={6} >
                    <Image src={about} style={{ width: '250px', height: '250px' }} thumbnail />
                </Col>
                <Col xs={12} md={6}>
                    <p style={{ fontSize: '20px' }}>Hi, I’m Kavipriya. I graduated in 2023 with a degree in Electronics and Communication Engineering. I developed an interest in programming and started learning web development on my own.

                        I know HTML, CSS, and JavaScript, and I’m currently learning React. I also use Python for backend development and have experience working with MySQL. I enjoy building small projects to improve my skills — one of them is a money tracker app to manage daily expenses.

                        I’m looking for an opportunity where I can grow as a developer and keep learning new things.
                    </p></Col>

            </Row>

        </Container>
    )
}

export default About;