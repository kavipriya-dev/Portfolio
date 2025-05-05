import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
function Portfolio() {
    return (

        <header>
            <Container>
                <Navbar className="d-flex justify-content-between align-items-center gap-5" >


                    <div><h1 style={{color:'white'}}>Kavipriya R</h1>
                    </div>
                    <div className="d-flex gap-5">
                        <a href='#about' className='text-white text-decoration-none'>About</a>
                        <a href='#skills' className='text-white text-decoration-none'>Skills</a>
                        <a href='#education' className='text-white text-decoration-none'>Education</a>
                        <a href='#projects' className='text-white text-decoration-none'>Projects</a>
                        <a href='#contact'className='text-white text-decoration-none'>Contact</a>
                    </div>


                </Navbar>
            </Container>
           


        </header>

    )
}
export default Portfolio;