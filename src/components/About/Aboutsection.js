import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";



const Aboutsection = () => {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>

                <div className="home-about-description">
                    <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
                    <p className="home-about-body">
                        Passionate about exploring new technologies and I have at least learnt
                        something, while continuously expanding knowledge across various domains.<br />
                        <br />Experienced in delivering tailored solutions for diverse projects, from web development to design, ensuring
                        <i><b className="purple"> client satisfaction. </b></i>
                        Proficient in building robust web applications using&nbsp;
                        <i>{" "}<b className="purple">MongoDB, Express.js, React.js, and Node.js.</b></i>
                        <br /><br />
                        Skilled in designing intuitive and visually appealing &nbsp;
                        <i><b className="purple">user interfaces </b>  with a focus on</i>
                        <i><b className="purple">    user experience </b></i>
                        and modern design principles.
                    </p>
                </div>





            </Container>
        </Container>
    )
}

export default Aboutsection