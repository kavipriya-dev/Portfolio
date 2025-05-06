import React from 'react';
import Profile from '../image/Profile.jpg'
import { Col, Container, Image, Row, Button } from 'react-bootstrap';


function Intro() {
    return (
        <Container id='intro' className=' d-flex  justify-content-center text-white' style={{ marginTop: '150px' }}>
            <Row>
                <Col xs={12} md={6}>
                    <Image src={Profile} style={{ width: '250px', height: '250px', objectFit: 'cover' }} roundedCircle></Image>
                </Col>
                <Col xs={12} md={6}>
                    <p style={{ fontSize: '20px' }}>Hello, I’m Kavipriya, a frontend developer who enjoys building clean, responsive websites. I work mainly with HTML, CSS, JavaScript, and React. I’m always learning, improving, and turning ideas into real, usable designs. Quiet by nature, creative at heart — I let my code speak for me.</p>
                    <a href='/KAVIPRIYA R-Resume Full stack developer.pdf' download>
                        <Button  style={{ width: '100%' }}>Resume</Button>

                    </a>
                </Col>
            </Row>

        </Container>
    )
}
export default Intro;
