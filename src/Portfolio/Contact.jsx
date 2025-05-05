import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './CSS/contact.css';

function Contact() {
    return (
        <Container id='contact'>
            <h1 className='text-center text-white'>Get in Touch</h1>
            <Row className='text-center text-white'>
                <Col >
                    <h3>Let's connect</h3>
                    <p>kavipriyaramalingam15@gmail.com</p>
                    <p>Tamilnadu,India</p>
                </Col>
            </Row>

        </Container>
    )
}
export default Contact;