import React from 'react';
import {Container} from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaDatabase } from 'react-icons/fa';
import './CSS/skills.css';

function Skills() {
  return (
    <Container id="skills">
        <h1 className='skills-section mb-5'>Skills</h1>
      <div className="skills-scroll">
        <div className="skills-track">
          <div className="skill-item"><FaHtml5 size={50} color="#e44d26" /><p>HTML</p></div>
          <div className="skill-item"><FaCss3Alt size={50} color="#264de4" /><p>CSS</p></div>
          <div className="skill-item"><FaJs size={50} color="#f0db4f" /><p>JavaScript</p></div>
          <div className="skill-item"><FaReact size={50} color="#61dbfb" /><p>React JS</p></div>
          <div className="skill-item"><FaPython size={50} color="#3776ab" /><p>Python</p></div>
          <div className="skill-item"><FaDatabase size={50} color="#f29111" /><p>MySQL</p></div>

          <div className="skill-item"><FaHtml5 size={50} color="#e44d26" /><p>HTML</p></div>
          <div className="skill-item"><FaCss3Alt size={50} color="#264de4" /><p>CSS</p></div>
          <div className="skill-item"><FaJs size={50} color="#f0db4f" /><p>JavaScript</p></div>
          <div className="skill-item"><FaReact size={50} color="#61dbfb" /><p>React JS</p></div>
          <div className="skill-item"><FaPython size={50} color="#3776ab" /><p>Python</p></div>
          <div className="skill-item"><FaDatabase size={50} color="#f29111" /><p>MySQL</p></div>
        </div>
      </div>
    </Container>
  );
}

export default Skills;
