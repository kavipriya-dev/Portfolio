import React from 'react';
import './CSS/education.css';
import Educationimage from '../image/Educationimage.jpg'; 
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
function Education() {
    return (
        <Container id='education'>

            <h1 className='text-center text-white mb-5' >Education</h1>
            <Row className='d-flex justify-content-center align-items-center '>
                <Col md={6}>
                    <Image className='education-image' src={Educationimage}></Image>
                </Col>
                <Col md={6}>
                    <Card className='education-card'>
                        <p>(2019-2023)</p>
                        <h5>BACHELOR DEGREE(ECE)</h5>
                        <p>Kongunadu College of Engineering and Technology-Thottiam</p>

                    </Card>
                    <Card className='education-card'>
                        <p>(2018-2019)</p>
                        <h5>HIGHER SECONDARY CERTIFICATE</h5>
                        <p>Kongu Matriculation Higher Secondary School,Morappur</p>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Education;