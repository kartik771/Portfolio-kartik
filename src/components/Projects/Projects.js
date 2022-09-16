import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/blog.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/codeEditor.png";

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
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Movies Application"
              description="Fetch all the movies from tmdb API.
              • Add Movies to the favorites section and remove them from same.
              • Sort the movies based on the rating and popularity in ascending and descending order.
              • Categories movies based on the genres of interest."
              ghLink="https://github.com/kartik771/moviesapp.git"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Camera Application"
              description="It is a camera with functionalities of recording video and capturing pictures.
              • We can also apply different filters to our pictures.
              • We can also access the captured videos and pictures in gallery.
              • We can download and delete the videos at any moment in our device.
              • For database we used indexed DB."
              ghLink="https://github.com/kartik771/CameraApp.git"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Ticket Creator"
              description="It creates different tickets as a to do list based on the priorities.
              • We can change the priority edit them and delete them at any time.
              • We used local storage to store the tickets made."
              ghLink="https://github.com/kartik771/ticket-creator"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="HAckerRank Automation"
              description="Built an automation program to login and auto submit the solution of all problems in a particular section.
              • Used Puppeteer.js module to implement automation in the browser and JavaScript Promises to handle Asynchronous Events."
              ghLink="https://github.com/kartik771/hackerrank"
             // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="ESPN CricInfo Scrapper"
              description="Create a folder of ipl 2020.
              • Inside that folder create folders for each team playing in that ipl.
              • Create Excel file of each batsman in that team folder in which we will store details of the player in the form of array of object where each object should describe a particular match played by a player"
              ghLink="https://github.com/kartik771/Project-2-Web-Scrapping-"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
