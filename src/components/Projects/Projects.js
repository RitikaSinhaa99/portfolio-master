import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import chatify from "../../Assets/Projects/b.png";
import bitsOfCode from "../../Assets/Projects/a.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="ReadMatch – Book Recommendation & Ordering System"
              description="Book recommendation and ordering platform built using PHP for backend and MySQL as the database. Designed a responsive interface using HTML, CSS, and JavaScript to improve user experience. Integrated a personalized quiz for book suggestions and implemented secure user authentication to ensure safe browsing and transactions."
              ghLink="https://github.com/RitikaSinhaa99"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="BrainTeaser – Brain Game & User Classification Platform"
              description="Interactive web platform designed to host brain games that classify users as left- or right-brained. Developed RESTful APIs using Node.js for handling game logic and PostgreSQL for real-time user performance tracking. Focused on delivering accurate feedback with a smooth and responsive front-end."
              ghLink="https://github.com/RitikaSinhaa99/BrainTeaser.git"
            />
          </Col>

          
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
